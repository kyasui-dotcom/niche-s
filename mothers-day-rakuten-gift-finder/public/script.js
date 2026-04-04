const form = document.getElementById('diagnosis-form');
const summary = document.getElementById('summary');
const statusBox = document.getElementById('status');
const results = document.getElementById('results');

function yen(value) {
  return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY', maximumFractionDigits: 0 }).format(value || 0);
}

function escapeHtml(value = '') {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderSummary(payload) {
  const { request, diagnosis } = payload;
  summary.innerHTML = `
    <strong>${escapeHtml(diagnosis.headline)}</strong>
    <span>${escapeHtml(diagnosis.note)}</span>
    <div class="meta-pills">
      <span>予算: ${escapeHtml(request.budgetLabel)}</span>
      <span>カテゴリ: ${escapeHtml(request.categoryLabel)}</span>
      <span>軸: ${escapeHtml(request.purposeLabel)}</span>
      <span>急ぎ具合: ${escapeHtml(request.urgencyLabel)}</span>
    </div>
    <div class="checklist">
      ${diagnosis.checklist.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}
    </div>
  `;
}

function renderResults(items = []) {
  if (!items.length) {
    results.innerHTML = `
      <div class="empty-state">
        <strong>この条件では十分な候補が見つかりませんでした。</strong>
        <p>カテゴリを1つ広げるか、予算帯をひとつ上げ下げすると出やすくなります。</p>
      </div>
    `;
    return;
  }

  results.innerHTML = items.map((item, index) => `
    <article class="result-card ${index === 0 ? 'best' : ''}">
      <span class="rank-badge">${index === 0 ? 'まず見る候補' : `候補 ${index + 1}`}</span>
      <div class="result-top">
        <img class="result-image" src="${escapeHtml(item.imageUrl || './og-image.svg')}" alt="${escapeHtml(item.itemName)}" loading="lazy" />
        <div>
          <h3>${escapeHtml(item.itemName)}</h3>
          <div class="price-row">
            <strong>${yen(item.itemPrice)}</strong>
            <span class="rating">★ ${Number(item.reviewAverage || 0).toFixed(2)} / レビュー ${Number(item.reviewCount || 0).toLocaleString('ja-JP')} 件</span>
          </div>
          <p>${escapeHtml(item.catchcopy || '')}</p>
        </div>
      </div>
      <div class="note-box">${escapeHtml(item.diagnosisReason)}</div>
      <div class="shop-row">
        <span>ショップ: ${escapeHtml(item.shopName || 'Rakuten shop')}</span>
        <span>診断スコア: ${escapeHtml(String(item.score || '—'))}</span>
      </div>
      <div class="result-actions">
        <a class="button primary" href="${escapeHtml(item.itemUrl)}" target="_blank" rel="nofollow sponsored noopener noreferrer">楽天で商品を見る</a>
      </div>
    </article>
  `).join('');
}

async function runDiagnosis() {
  const params = new URLSearchParams(new FormData(form));
  statusBox.textContent = 'Rakuten API から候補を取得しています…';
  results.innerHTML = '';

  try {
    const response = await fetch(`/api/diagnose?${params.toString()}`);
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || 'Rakuten API の取得に失敗しました。');
    }

    renderSummary(payload);
    renderResults(payload.items);
    statusBox.textContent = `${payload.items.length} 件の候補を表示しました。`; 
  } catch (error) {
    summary.innerHTML = `
      <strong>いまは候補を読み込めませんでした。</strong>
      <span>デプロイ先に Rakuten の認証情報が入っていないか、API 呼び出しで一時的に失敗しています。</span>
    `;
    results.innerHTML = `
      <div class="empty-state">
        <strong>${escapeHtml(error.message)}</strong>
        <p>Wrangler secret に <code>RAKUTEN_APPLICATION_ID</code> と <code>RAKUTEN_ACCESS_KEY</code>、必要なら <code>RAKUTEN_AFFILIATE_ID</code> を設定すると、この画面からそのまま候補が出ます。</p>
      </div>
    `;
    statusBox.textContent = '候補を取得できませんでした。';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  runDiagnosis();
});

runDiagnosis();
