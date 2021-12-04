function menu() {
  return {
    menu: [
      {
        id: 1,
        name: "Home",
        class: "fas fa-home",
      },
      {
        id: 2,
        name: "About",
        class: "fas fa-user",
      },
      {
        id: 3,
        name: "Portfolio",
        class: "fas fa-briefcase",
      },
      {
        id: 4,
        name: "Contact",
        class: "fas fa-envelope-open",
      },
      {
        id: 5,
        name: "Blog",
        class: "fas fa-edit",
      },
    ],
    init: function () {
      console.log("[FUNCTION:menu:init()]");
    },
  };
}
