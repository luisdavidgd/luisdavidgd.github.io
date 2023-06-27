import 'tailwindcss/tailwind.css';
import '../css/style.css';
import Alpine from 'alpinejs';
import home from './home';
import menu from './menu';
import portfolio from './portfolio';
import todo from './todo';

document.addEventListener('DOMContentLoaded', () => {
  Alpine.data('bootstrap', () => ({
    home: home(),
    menu: menu(),
    portfolio: portfolio(),
    todo: todo(),
    activeMenu: localStorage.getItem('activeMenu') || 'menu-item-1',
    activePortfolio: localStorage.getItem('activePortfolio') || 'portfolio-item-2',

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

  Alpine.start();
});
