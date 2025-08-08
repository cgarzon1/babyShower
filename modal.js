window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('welcomeModal');
  const closeBtn = document.getElementById('closeModal');

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
});
