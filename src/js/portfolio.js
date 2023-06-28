function portfolio() {
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
    activePortfolio: localStorage.getItem('activePortfolio') || 'portfolio-item-2',
    init() {
      this.$watch('activePortfolio', value => localStorage.setItem('activePortfolio', value));
    }
  };
}

export default portfolio
