document.addEventListener("alpine:init", () => {
  console.log("[HOOK:alpine:init]");
  customFunction();

  Alpine.data("bootstrap", () => ({
    activeMenu: "",
    activePortfolio: "",

    init: function () {
      console.log("[FUNCTION:bootstrap:init()]");
      this.activeMenu = "menu-item-1";
      this.activePortfolio = "portfolio-item-2";
    },
  }));
});

document.addEventListener("alpine:initialized", () => {
  console.log("[HOOK:alpine:initialized]");
  customFunction();
});
