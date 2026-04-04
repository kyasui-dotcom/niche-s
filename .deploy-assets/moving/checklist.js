const checklist = document.getElementById('moving-checklist');
const progressLabel = document.getElementById('checklist-progress-label');
const progressFill = document.getElementById('checklist-progress-fill');

function updateChecklistProgress() {
  if (!checklist) return;
  const inputs = [...checklist.querySelectorAll('input[type="checkbox"]')];
  const checked = inputs.filter((input) => input.checked).length;
  const percent = inputs.length ? Math.round((checked / inputs.length) * 100) : 0;

  inputs.forEach((input) => {
    input.closest('.check-item')?.classList.toggle('done', input.checked);
  });

  progressLabel.textContent = `${checked} / ${inputs.length} 完了`;
  progressFill.style.width = `${percent}%`;
}

if (checklist) {
  checklist.addEventListener('change', updateChecklistProgress);
  updateChecklistProgress();
}
