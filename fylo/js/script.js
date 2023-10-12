//dom variables
themeButton = document.querySelector('#theme-toggle');
lightIcon = document.querySelector('#light-icon');
darkIcon = document.querySelector('#dark-icon');

// system theme
if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
  darkIcon.classList.remove('hidden');
} else {
  document.documentElement.classList.remove('dark');
  lightIcon.classList.remove('hidden');
}

//function
const toggleTheme = () => {
  darkIcon.classList.toggle('hidden');
  lightIcon.classList.toggle('hidden');

  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
};

// event listener
themeButton.addEventListener('click', toggleTheme);
