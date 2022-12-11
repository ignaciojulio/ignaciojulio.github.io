import Template from './templates/Template.js';
import './styles/main.css';

(async function header() {
  const header = null || document.querySelector('header');
  header.innerHTML = await Template();
})();