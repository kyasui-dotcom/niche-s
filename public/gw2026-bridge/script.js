const HOLIDAYS = {
  '2026-04-29': '昭和の日',
  '2026-05-03': '憲法記念日',
  '2026-05-04': 'みどりの日',
  '2026-05-05': 'こどもの日',
  '2026-05-06': '振替休日'
};

const START = new Date('2026-04-25T00:00:00+09:00');
const END = new Date('2026-05-10T00:00:00+09:00');
const RANGE = [];

for (let d = new Date(START); d <= END; d.setDate(d.getDate() + 1)) {
  RANGE.push(new Date(d));
}

const fmt = new Intl.DateTimeFormat('ja-JP', { month: 'numeric', day: 'numeric', weekday: 'short' });

function keyOf(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function isHoliday(date) {
  return Boolean(HOLIDAYS[keyOf(date)]);
}

function isOff(date) {
  return isWeekend(date) || isHoliday(date);
}

function describe(date) {
  const holiday = HOLIDAYS[keyOf(date)];
  if (holiday) return holiday;
  return isWeekend(date) ? '土日' : '平日';
}

function buildOptions(maxPto) {
  const options = [];
  for (let i = 0; i < RANGE.length; i += 1) {
    for (let j = i; j < RANGE.length; j += 1) {
      const slice = RANGE.slice(i, j + 1);
      let ptoDates = [];
      let valid = true;
      for (const date of slice) {
        if (!isOff(date)) {
          ptoDates.push(keyOf(date));
        }
      }
      if (ptoDates.length > maxPto) valid = false;
      if (!valid) continue;
      if (slice.length === 0) continue;
      options.push({
        start: slice[0],
        end: slice[slice.length - 1],
        totalDays: slice.length,
        ptoDates,
        score: slice.length * 100 - ptoDates.length * 8 - i
      });
    }
  }

  return options
    .sort((a, b) => b.score - a.score)
    .filter((option, index, arr) => arr.findIndex((x) => keyOf(x.start) === keyOf(option.start) && keyOf(x.end) === keyOf(option.end)) === index)
    .slice(0, 3);
}

function renderSummary(best, maxPto) {
  const summary = document.getElementById('summary');
  if (!best) {
    summary.innerHTML = '<strong>候補が見つかりませんでした。</strong><span>条件を変えて試してください。</span>';
    return;
  }

  const ptoText = best.ptoDates.length
    ? `有給は ${best.ptoDates.map((value) => fmt.format(new Date(`${value}T00:00:00+09:00`))).join(' / ')} に入れる想定です。`
    : '有給なしでもそのまま休めます。';

  summary.innerHTML = `
    <strong>最大 ${best.totalDays} 連休が狙えます。</strong>
    <span>上限 ${maxPto} 日の条件では ${fmt.format(best.start)}〜${fmt.format(best.end)} が最有力。${ptoText}</span>
  `;
}

function renderResults(options) {
  const results = document.getElementById('results');
  results.innerHTML = options.map((option, index) => `
    <article class="result-card ${index === 0 ? 'best' : ''}">
      <span class="result-rank">${index === 0 ? 'おすすめ' : `候補 ${index + 1}`}</span>
      <h3>${fmt.format(option.start)}〜${fmt.format(option.end)}</h3>
      <p class="result-days">${option.totalDays}<span>連休</span></p>
      <p class="result-pto">有給 ${option.ptoDates.length} 日</p>
      <p class="result-range">${option.ptoDates.length ? option.ptoDates.map((value) => fmt.format(new Date(`${value}T00:00:00+09:00`))).join(' / ') : '有給なし'}</p>
      <p class="result-meta">長さ重視で単純比較。細かな社内カレンダーは未反映です。</p>
    </article>
  `).join('');
}

function renderCalendar(best) {
  const calendar = document.getElementById('calendar-grid');
  const ptoSet = new Set(best?.ptoDates || []);
  calendar.innerHTML = RANGE.map((date) => {
    const key = keyOf(date);
    const classes = ['day'];
    if (isWeekend(date)) classes.push('weekend');
    if (isHoliday(date)) classes.push('holiday');
    if (ptoSet.has(key)) classes.push('pto');
    return `
      <div class="${classes.join(' ')}">
        <small>${fmt.format(date)}</small>
        <strong>${describe(date)}</strong>
        ${ptoSet.has(key) ? '<em>有給候補</em>' : ''}
      </div>
    `;
  }).join('');
}

function renderShareCopy(options) {
  const container = document.getElementById('share-copy');
  container.innerHTML = options.map((option, index) => {
    const text = option.ptoDates.length
      ? `2026年GW、有給${option.ptoDates.length}日で${option.totalDays}連休にできる。候補は${option.ptoDates.map((value) => fmt.format(new Date(`${value}T00:00:00+09:00`))).join('・')}。予定まだ決めてない人は早めに確保したほうがよさそう。`
      : `2026年GW、今年は有給なしでも${option.totalDays}連休。かなり組みやすい。`;
    return `
      <div class="share-item">
        <p><strong>${index === 0 ? 'そのまま投稿しやすい文面' : '別パターン'}</strong></p>
        <code>${text}</code>
      </div>
    `;
  }).join('');
}

function updatePlanner(maxPto) {
  const options = buildOptions(maxPto);
  renderSummary(options[0], maxPto);
  renderResults(options);
  renderCalendar(options[0]);
  renderShareCopy(options);
}

document.getElementById('planner-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const maxPto = Number(document.getElementById('max-pto').value);
  updatePlanner(maxPto);
});

updatePlanner(Number(document.getElementById('max-pto').value));
