document.addEventListener("alpine:init", () => {
  console.log("[HOOK:alpine:init]");

  luidavid();

  Alpine.data("bootstrap", () => ({
    activeMenu: "",
    activePortfolio: "",

    init: function () {
      console.log("[FUNCTION:bootstrap:init()]");
      this.activeMenu = "menu-item-1";
      this.activePortfolio = "portfolio-item-1";
    },
  }));
});

document.addEventListener("alpine:initialized", () => {
  console.log("[HOOK:alpine:initialized]");
  luidavid();
});
