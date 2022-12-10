import Template from './templates/Template.js';
console.log('hola');

(async function header() {
  const header = null || document.querySelector('header');
  header.innerHTML = await Template();
})();
