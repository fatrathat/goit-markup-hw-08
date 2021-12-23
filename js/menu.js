(() => {
  const refs = {
    openMenuBtn: document.querySelector('.open-mob'),
    closeMenuBtn: document.querySelector('.button-mob-close'),
    menu: document.querySelector('.mob-menu-container'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();