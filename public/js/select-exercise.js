// Select Workout - surprise past workouts and browsed history, shown in full
let workoutIndex = {};  // filename -> {filename, date, phases, exerciseCount}
let workoutKeys = [];
let dailyWorkouts = {};
let currentSelection = null; // filename
let candidate = null;        // filename pending confirm
let recentPicks = [];        // filenames, most recent first
const STORE_KEY = 'selectWorkout.current';
const RECENT_KEY = 'selectWorkout.recent';
const RECENT_MAX = 8;
let toastTimer = null;

document.addEventListener('DOMContentLoaded', init);

function init() {
    if (!loadData()) {
        showDataError();
        return;
    }
    buildDateFilter();
    restoreSelection();
    setupEvents();
    applyFilters();
}

function loadData() {
    try {
        const data = window.EXERCISE_DATA;
        if (!data || !data.all_workouts) {
            return false;
        }
        dailyWorkouts = data.daily_workouts || {};
        workoutIndex = {};
        data.all_workouts.forEach(workout => {
            const phases = workout.phases || [];
            workoutIndex[workout.filename] = {
                filename: workout.filename,
                date: workout.date,
                phases: phases,
                exerciseCount: phases.reduce((n, p) => n + ((p.exercises || []).length), 0)
            };
        });
        workoutKeys = Object.keys(workoutIndex).sort((a, b) =>
            workoutIndex[b].date.localeCompare(workoutIndex[a].date));
        return workoutKeys.length > 0;
    } catch (error) {
        console.error('Error loading exercise data:', error);
        return false;
    }
}

function showDataError() {
    const grid = document.getElementById('exerciseGrid');
    if (grid) {
        grid.innerHTML = '<p class="text-gray-500">Workout data failed to load. Check that exercise-data.js is present.</p>';
    }
    const surpriseBtn = document.getElementById('surpriseBtn');
    if (surpriseBtn) {
        surpriseBtn.disabled = true;
        surpriseBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
}

function setupEvents() {
    const searchInput = document.getElementById('searchInput');
    const dateFilter = document.getElementById('dateFilter');
    const sortBy = document.getElementById('sortBy');

    if (searchInput) searchInput.addEventListener('input', debounce(applyFilters, 250));
    if (dateFilter) dateFilter.addEventListener('change', applyFilters);
    if (sortBy) sortBy.addEventListener('change', applyFilters);

    const surpriseBtn = document.getElementById('surpriseBtn');
    const confirmBtn = document.getElementById('confirmBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const dismissBtn = document.getElementById('dismissBtn');
    const copyBtn = document.getElementById('copyBtn');

    if (surpriseBtn) surpriseBtn.addEventListener('click', surprise);
    if (confirmBtn) confirmBtn.addEventListener('click', confirmCandidate);
    if (shuffleBtn) shuffleBtn.addEventListener('click', surprise);
    if (dismissBtn) dismissBtn.addEventListener('click', hidePreview);
    if (copyBtn) copyBtn.addEventListener('click', copyCurrentTable);

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') hidePreview();
    });
}

function debounce(fn, ms) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), ms);
    };
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function buildDateFilter() {
    const dateFilter = document.getElementById('dateFilter');
    if (!dateFilter) return;
    const dates = Object.keys(dailyWorkouts).sort().reverse();
    dates.forEach(date => {
        const count = (dailyWorkouts[date] || []).length;
        const option = document.createElement('option');
        option.value = date;
        option.textContent = `${date} (${count} workout${count === 1 ? '' : 's'})`;
        dateFilter.appendChild(option);
    });
}

function filteredKeys() {
    const query = (document.getElementById('searchInput').value || '').trim().toLowerCase();
    const date = document.getElementById('dateFilter').value;
    const sortBy = document.getElementById('sortBy').value;

    let keys = workoutKeys.filter(key => {
        const w = workoutIndex[key];
        if (date && w.date !== date) return false;
        if (query && !w.phases.some(p => (p.exercises || []).some(e => e.toLowerCase().includes(query)))) {
            return false;
        }
        return true;
    });

    if (sortBy === 'oldest') {
        keys.sort((a, b) => workoutIndex[a].date.localeCompare(workoutIndex[b].date));
    } else {
        keys.sort((a, b) => workoutIndex[b].date.localeCompare(workoutIndex[a].date));
    }
    return keys;
}

function summaryLine(key) {
    const w = workoutIndex[key];
    const phaseNames = w.phases.map(p => p.phase).slice(0, 3).join(' · ');
    const more = w.phases.length > 3 ? ' …' : '';
    return `${w.date} · ${w.phases.length} phases, ${w.exerciseCount} exercises — ${phaseNames}${more}`;
}

function applyFilters() {
    const keys = filteredKeys();
    const grid = document.getElementById('exerciseGrid');
    const noResults = document.getElementById('noResults');
    const showingCount = document.getElementById('showingCount');

    if (showingCount) showingCount.textContent = keys.length;
    if (!grid) return;

    if (keys.length === 0) {
        grid.innerHTML = '';
        if (noResults) noResults.classList.remove('hidden');
        return;
    }
    if (noResults) noResults.classList.add('hidden');

    grid.innerHTML = keys.map(key => `
        <button type="button" data-key="${escapeHtml(key)}"
            class="pick-btn text-left bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg px-3 py-2 transition-colors">
            <span class="block font-medium text-gray-800 text-sm">${escapeHtml(workoutIndex[key].date)}</span>
            <span class="block text-xs text-gray-500">${workoutIndex[key].phases.length} phases · ${workoutIndex[key].exerciseCount} exercises</span>
        </button>`).join('');

    grid.querySelectorAll('.pick-btn').forEach(btn => {
        btn.addEventListener('click', () => showPreview(btn.getAttribute('data-key')));
    });
}

function surprise() {
    const all = filteredKeys();
    const pool = all.filter(key => key !== currentSelection);
    const usable = pool.length > 0 ? pool : all;
    if (usable.length === 0) {
        showToast('No workouts match — loosen the filters');
        return;
    }
    showPreview(usable[Math.floor(Math.random() * usable.length)]);
}

function showPreview(key) {
    if (!key || !workoutIndex[key]) return;
    candidate = key;
    const card = document.getElementById('previewCard');
    const previewName = document.getElementById('previewName');
    const previewMeta = document.getElementById('previewMeta');
    if (previewName) previewName.textContent = `Workout from ${workoutIndex[key].date}`;
    if (previewMeta) previewMeta.textContent = summaryLine(key);
    if (card) {
        card.classList.remove('hidden');
        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        card.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
    }
}

function hidePreview() {
    candidate = null;
    const card = document.getElementById('previewCard');
    if (card) card.classList.add('hidden');
}

function confirmCandidate() {
    if (!candidate) return;
    selectWorkout(candidate, true);
    hidePreview();
}

function selectWorkout(key, confirmed) {
    if (!key || !workoutIndex[key]) return;
    currentSelection = key;
    renderHero();
    try {
        localStorage.setItem(STORE_KEY, key);
    } catch (e) { /* private mode */ }
    recentPicks = [key, ...recentPicks.filter(k => k !== key)].slice(0, RECENT_MAX);
    try {
        localStorage.setItem(RECENT_KEY, JSON.stringify(recentPicks));
    } catch (e) { /* private mode */ }
    renderRecent();
    if (confirmed) showToast(`Selected workout from ${workoutIndex[key].date}`);
}

function simplifiedTiming(phaseName) {
    const name = phaseName || '';
    const xMatch = name.match(/(\d+)\s*x\s*(\d+)/);
    if (xMatch) return `${xMatch[1]} x ${xMatch[2]}`;
    return name;
}

function workoutTableHtml(phases) {
    if (!phases || phases.length === 0) {
        return '<p class="text-gray-500 text-sm">No workout data available</p>';
    }
    const maxRows = Math.max(...phases.map(p => (p.exercises || []).length));
    let html = '<table class="w-full border-collapse border border-gray-300 text-sm"><tr>';
    phases.forEach(p => {
        html += `<th class="border border-gray-300 bg-gray-100 p-2 font-semibold text-center">${escapeHtml(simplifiedTiming(p.phase))}</th>`;
    });
    html += '</tr>';
    for (let i = 0; i < maxRows; i++) {
        html += '<tr>';
        phases.forEach(p => {
            const cell = (p.exercises || [])[i];
            html += `<td class="border border-gray-300 p-2 text-center">${cell ? escapeHtml(cell) : '&nbsp;'}</td>`;
        });
        html += '</tr>';
    }
    return html + '</table>';
}

function renderHero() {
    const empty = document.getElementById('noSelection');
    const detail = document.getElementById('selectionDetail');
    if (!currentSelection) {
        if (empty) empty.classList.remove('hidden');
        if (detail) detail.classList.add('hidden');
        return;
    }
    const w = workoutIndex[currentSelection];
    if (empty) empty.classList.add('hidden');
    if (detail) detail.classList.remove('hidden');
    const nameEl = document.getElementById('currentName');
    const metaEl = document.getElementById('currentMeta');
    const tableEl = document.getElementById('currentTable');
    if (nameEl) nameEl.textContent = `Workout from ${w.date}`;
    if (metaEl) metaEl.textContent = `${w.phases.length} phases · ${w.exerciseCount} exercises`;
    if (tableEl) tableEl.innerHTML = workoutTableHtml(w.phases);
}

function renderRecent() {
    const wrap = document.getElementById('recentPicks');
    const row = document.getElementById('recentRow');
    if (!wrap || !row) return;
    const known = recentPicks.filter(k => workoutIndex[k]);
    if (known.length === 0) {
        wrap.classList.add('hidden');
        row.innerHTML = '';
        return;
    }
    wrap.classList.remove('hidden');
    row.innerHTML = known.map(key =>
        `<button type="button" data-key="${escapeHtml(key)}"
            class="recent-btn bg-blue-50 hover:bg-blue-100 text-blue-900 text-sm font-medium rounded-full px-4 py-2 transition-colors">${escapeHtml(workoutIndex[key].date)}</button>`
    ).join('');
    row.querySelectorAll('.recent-btn').forEach(btn => {
        btn.addEventListener('click', () => selectWorkout(btn.getAttribute('data-key'), true));
    });
}

function restoreSelection() {
    try {
        const saved = localStorage.getItem(STORE_KEY);
        if (saved && workoutIndex[saved]) {
            currentSelection = saved;
        }
        const recent = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
        if (Array.isArray(recent)) {
            recentPicks = recent.filter(k => workoutIndex[k]).slice(0, RECENT_MAX);
        }
    } catch (e) { /* private mode or corrupt storage */ }
    renderHero();
    renderRecent();
}

function copyCurrentTable() {
    if (!currentSelection) return;
    const table = workoutTableHtml(workoutIndex[currentSelection].phases);
    const done = () => showToast('Workout table copied');
    if (navigator.clipboard && window.ClipboardItem) {
        const item = new ClipboardItem({
            'text/html': new Blob([table], { type: 'text/html' }),
            'text/plain': new Blob([table.replace(/<[^>]*>/g, '')], { type: 'text/plain' })
        });
        navigator.clipboard.write([item]).then(done).catch(() => fallbackCopy(table, done));
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(table.replace(/<[^>]*>/g, '')).then(done).catch(() => fallbackCopy(table, done));
    } else {
        fallbackCopy(table, done);
    }
}

function fallbackCopy(table, done) {
    try {
        const area = document.createElement('textarea');
        area.value = table.replace(/<[^>]*>/g, '');
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        document.body.removeChild(area);
        done();
    } catch (e) {
        showToast('Copy failed — select the table manually');
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const text = document.getElementById('toastText');
    if (!toast || !text) return;
    text.textContent = message;
    toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.add('hidden'), 2500);
}
