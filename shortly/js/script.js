// dom variables
const formDOM = document.querySelector('#link-form');
const inputDOM = document.querySelector('#form-input');
const errorDOM = document.querySelector('#error');

const menuDOM = document.querySelector('.mobile-menu');
const buttonDOM = document.querySelector('.mobile-menu-button');

//validation
function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return !!pattern.test(str);
}

//functions
const formSubmit = (e) => {
  e.preventDefault();

  if (inputDOM.value === '') {
    errorDOM.innerHTML = 'Please enter your URL.';
    inputDOM.classList.add('border-red');
  } else if (!validURL(inputDOM.value)) {
    errorDOM.innerHTML = 'Please enter a valid URL.';
    inputDOM.classList.add('border-red');
  } else {
    errorDOM.innerHTML = '';
    inputDOM.classList.remove('border-red');
  }

  inputDOM.value = '';
};

const toggleMenu = () => {
  buttonDOM.classList.toggle('open');
  menuDOM.classList.toggle('flex');
  menuDOM.classList.toggle('hidden');
};

const hideMenu = () => {
  if (window.scrollY > 360) {
    buttonDOM.classList.remove('open');
    menuDOM.classList.remove('flex');
    menuDOM.classList.add('hidden');
  }
};

//event listener
formDOM.addEventListener('submit', formSubmit);
buttonDOM.addEventListener('click', toggleMenu);
document.addEventListener('scroll', hideMenu);
