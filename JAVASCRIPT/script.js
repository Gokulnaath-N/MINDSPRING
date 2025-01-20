document.addEventListener('DOMContentLoaded', (event) => {
  const moreButton = document.querySelector('.more');
  moreButton.addEventListener('click', () => {
      const moreMenu = document.querySelector('.more-menu');
      moreMenu.style.display = moreMenu.style.display === 'block' ? 'none' : 'block';
  });
});
