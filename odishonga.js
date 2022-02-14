const about = document.querySelector('.about');
const coding = document.querySelector('.coding');
const aboutSection = document.querySelector('.about-section');
const codingSection = document.querySelector('.coding-section');
const nav = document.querySelector('nav');
const title = document.querySelector('h1');
const exit = document.querySelector('.exit');
const codingExit = document.querySelector('.coding-section .exit');
const body = document.querySelector('body');
const darkMode = document.querySelector('.toggle-dark');

const revealAbout = () => {
  title.setAttribute('style', 'opacity: 0.3;');
  nav.setAttribute('style', 'opacity: 0.3;');
  darkMode.setAttribute('style', 'opacity: 0.3;');
  aboutSection.setAttribute('style', 'visibility: visible;');
}

const revealCoding = () => {
  title.setAttribute('style', 'opacity: 0.3;');
  nav.setAttribute('style', 'opacity: 0.3;');
  darkMode.setAttribute('style', 'opacity: 0.3;');
  codingSection.setAttribute('style', 'visibility: visible;');
}

const closeAbout = () => {
  title.setAttribute('style', 'opacity: 1;');
  nav.setAttribute('style', 'opacity: 1;');
  darkMode.setAttribute('style', 'opacity: 1;');
  aboutSection.setAttribute('style', 'visibility: hidden;');
}

const closeCoding = () => {
  title.setAttribute('style', 'opacity: 1;');
  nav.setAttribute('style', 'opacity: 1;');
  darkMode.setAttribute('style', 'opacity: 1;');
  codingSection.setAttribute('style', 'visibility: hidden;');
}


about.addEventListener('click', revealAbout);
coding.addEventListener('click', revealCoding);
exit.addEventListener('click', closeAbout);
codingExit.addEventListener('click', closeCoding);

const toggleDark = () => {
  if (body.className === 'light') {
    body.classList.replace('light', 'dark');
    document.getElementById('mode-button').innerHTML = 'Light.';
  }
   else if (body.className === 'dark') {
    body.classList.replace('dark', 'light');
    document.getElementById('mode-button').innerHTML = 'Dark.';
  }
}

darkMode.addEventListener('click', toggleDark);
