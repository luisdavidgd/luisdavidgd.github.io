import Alpine from 'alpinejs';
import home from './home';
import menu from './menu';
import portfolio from './portfolio';
import todo from './todo';
import '../css/style.css';

document.addEventListener('DOMContentLoaded', () => {
  Alpine.data('bootstrap', () => ({
    home: home(),
    menu: menu(),
    portfolio: portfolio(),
    todo: todo(),
    activeMenu: '',
    activePortfolio: '',

    async init() {
      this.activeMenu = 'menu-item-1';
      this.activePortfolio = 'portfolio-item-2';

      await this.loadComponents();
    },

    async loadComponents() {
      const componentNames = ['nav', 'home', 'about', 'portfolio', 'contact', 'blog'];

      for (const componentName of componentNames) {
        const response = await fetch(`../components/${componentName}.html`);
        const componentHTML = await response.text();
        document.querySelector(`#${componentName}`).innerHTML = componentHTML;
      }
    },
  }));

  Alpine.start();
});
