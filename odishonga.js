const about = document.querySelector('.about');
const aboutSection = document.querySelector('.about-section');
const nav = document.querySelector('nav');
const title = document.querySelector('h1');
const exit = document.querySelector('.exit');
const body = document.querySelector('body');

const revealAbout = () => {
  title.setAttribute('style', 'opacity: 0.3;');
  nav.setAttribute('style', 'opacity: 0.3;');
  aboutSection.setAttribute('style', 'visibility: visible;');
  aboutSection.setAttribute('id', 'marked');
}

const closeAbout = () => {
  title.setAttribute('style', 'opacity: 1;');
  nav.setAttribute('style', 'opacity: 1;');
  aboutSection.setAttribute('style', 'visibility: hidden;');
  aboutSection.removeAttribute('id');
  body.removeEventListener('click', closeAbout);
}

if (aboutSection.hasAttribute('id')) {
  body.addEventListener('click', closeAbout);
}

about.addEventListener('click', revealAbout);
exit.addEventListener('click', closeAbout);
