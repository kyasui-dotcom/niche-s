const form = document.getElementById('moving-cost-form');
const totalBox = document.getElementById('estimated-total');
const breakdown = document.getElementById('cost-breakdown');

function yen(value) {
  return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY', maximumFractionDigits: 0 }).format(Math.round(value));
}

function calculate() {
  const home = form.homeSize.value;
  const distance = form.distance.value;
  const season = form.season.value;
  const packing = form.packing.value;
  const options = new FormData(form).getAll('options');

  const baseMap = {
    studio: 35000,
    '1k': 50000,
    '1ldk': 70000,
    family: 110000
  };

  const distanceMap = {
    local: 1,
    nearby: 1.25,
    mid: 1.65,
    far: 2.25
  };

  const seasonMap = {
    normal: 1,
    busy: 1.35,
    offpeak: 0.88
  };

  const packingMap = {
    self: 0,
    half: 12000,
    full: 28000
  };

  const optionMap = {
    ac: 14000,
    piano: 25000,
    disposal: 12000,
    storage: 18000,
    cleaning: 16000
  };

  const base = baseMap[home] || 50000;
  const haul = base * (distanceMap[distance] || 1) * (seasonMap[season] || 1);
  const packingFee = packingMap[packing] || 0;
  const optionFee = options.reduce((sum, key) => sum + (optionMap[key] || 0), 0);
  const utilityStart = 5000;
  const adminReserve = Math.max(4000, base * 0.08);
  const total = haul + packingFee + optionFee + utilityStart + adminReserve;

  totalBox.textContent = yen(total);
  breakdown.innerHTML = `
    <div class="summary-grid">
      <article class="summary-card">
        <h3>引越し会社の基本見積もり</h3>
        <p>${yen(haul)}</p>
      </article>
      <article class="summary-card">
        <h3>荷造りサポート</h3>
        <p>${yen(packingFee)}</p>
      </article>
      <article class="summary-card">
        <h3>オプション費用</h3>
        <p>${yen(optionFee)}</p>
      </article>
      <article class="summary-card">
        <h3>開通・細かな初期費用の予備</h3>
        <p>${yen(utilityStart + adminReserve)}</p>
      </article>
    </div>
    <div class="notice">
      <strong>使い方メモ</strong>
      <p>この金額は「比較を始める前の荒い目安」です。繁忙期・時間指定・階段作業・車両制限で上下しやすいので、実際は2〜3社相見積もりで確認してください。</p>
    </div>
  `;
}

if (form) {
  form.addEventListener('input', calculate);
  calculate();
}
