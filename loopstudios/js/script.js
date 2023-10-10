const menu = document.querySelector('.mobile-menu');
const button = document.querySelector('.mobile-menu-button');

const toggleMenu = () => {
  button.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
};

const hideMenu = () => {
  if (window.scrollY > 360) {
    button.classList.remove('open');
    menu.classList.remove('flex');
    menu.classList.add('hidden');
  }
};

button.addEventListener('click', toggleMenu);
document.addEventListener('scroll', hideMenu);
