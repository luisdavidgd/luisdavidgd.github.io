function portfolio(activePortfolio) {
  return {
    portfolio: [
      {
        id: 1,
        name: "All",
      },
      {
        id: 2,
        name: "Design",
      },
      {
        id: 3,
        name: "Development",
      },
      {
        id: 4,
        name: "Print",
      },
    ],
    init() {
      this.$watch('activePortfolio', value => localStorage.setItem('activePortfolio', value));
    }
  };
}

export default portfolio
