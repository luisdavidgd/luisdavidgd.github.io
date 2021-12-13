function menu() {
  return {
    menu: [
      {
        id: 1,
        name: "Home",
      },
      {
        id: 2,
        name: "About",
      },
      {
        id: 3,
        name: "Portfolio",
      },
      {
        id: 4,
        name: "Contact",
      },
      {
        id: 5,
        name: "Blog",
      },
    ],
    init: function () {
      console.log("[FUNCTION:menu:init()]");
    },
  };
}
