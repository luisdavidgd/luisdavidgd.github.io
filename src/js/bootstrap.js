document.addEventListener("alpine:init", () => {
  Alpine.data("bootstrap", () => ({
    activeMenu: "",
    activePortfolio: "",

    async init() {
      this.activeMenu = "menu-item-1";
      this.activePortfolio = "portfolio-item-2";

      await this.loadComponents();
    },

    async loadComponents() {
      const componentNames = ["nav", "home", "about", "portfolio", "contact", "blog"];

      for (const componentName of componentNames) {
        const response = await fetch(`./components/${componentName}.html`);
        const componentHTML = await response.text();
        document.querySelector(`#${componentName}`).innerHTML = componentHTML;
      }
    }
    ,
  }));

  if (typeof Alpine === 'undefined') {
    Alpine.start();
  }
});
