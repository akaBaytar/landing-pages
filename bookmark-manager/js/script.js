//dom variables
const tabs = document.querySelectorAll('.tab');
const tabPanels = document.querySelectorAll('.panel');
const panelsWrapper = document.querySelector('#panels');

const menu = document.querySelector('.mobile-menu');
const button = document.querySelector('.mobile-menu-button');

const darkLogo = document.querySelector('.dark-logo');
const lightLogo = document.querySelector('.light-logo');

//functions
const onTabClick = (e) => {
  const target = e.target.getAttribute('data-target');

  tabs.forEach((tab) => {
    tab.children[0].classList.remove('text-softRed', 'border-softRed');
  });

  tabPanels.forEach((panel) => panel.classList.add('hidden'));

  e.target.classList.add('text-softRed', 'border-softRed');

  panelsWrapper.querySelector(`.${target}`).classList.add('flex');
  panelsWrapper.querySelector(`.${target}`).classList.remove('hidden');
};

const toggleMenu = () => {
  button.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
  darkLogo.classList.toggle('hidden');
  lightLogo.classList.toggle('hidden');
};

const hideMenu = () => {
  if (window.scrollY > 560) {
    button.classList.remove('open');
    menu.classList.remove('flex');
    menu.classList.add('hidden');
    darkLogo.classList.remove('hidden');
    lightLogo.classList.add('hidden');
  }
};

//event listeners
button.addEventListener('click', toggleMenu);
document.addEventListener('scroll', hideMenu);
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));
