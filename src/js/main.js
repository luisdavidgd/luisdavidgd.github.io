import 'tailwindcss/tailwind.css';
import '../css/style.css';
import Alpine from 'alpinejs';

document.addEventListener('DOMContentLoaded', () => {
  Alpine.data('bootstrap', () => ({
    activeMenu: localStorage.getItem('activeMenu') || 'menu-item-1',

    async init() {
      await this.loadComponents();
    },

    async loadComponents() {
      const componentNames = ['nav', 'home', 'about', 'portfolio', 'blog', 'contact'];

      for (const componentName of componentNames) {
        const response = await fetch(`../components/${componentName}.html`);
        const componentHTML = await response.text();
        document.querySelector(`#${componentName}`).innerHTML = componentHTML;
      }
    },
  }));

  const components = ['menu', 'home', 'portfolio', 'todo', 'blog'];
  components.forEach((component) => {
    import(`./${component}.js`).then((module) => {
      Alpine.data(component, module.default);
    });
  });

  Alpine.start();
});
