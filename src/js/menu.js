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
        name: "Blog",
      },
      {
        id: 5,
        name: "Contact",
      },
    ],
    init() {
      this.$watch('activeMenu', value => localStorage.setItem('activeMenu', value));
    }
  };
}

export default menu
