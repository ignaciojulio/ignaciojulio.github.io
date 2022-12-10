import Template from './templates/Template.js';
import './styles/main.css'
import './styles/var.styl';

(async function header() {
  const header = null || document.querySelector('header');
  header.innerHTML = await Template();
})();