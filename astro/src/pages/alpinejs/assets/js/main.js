function getData(sheet = 'menu') {
  return {
    items: [],
    loading: true,

    async init() {
      const cacheKey = `items-cache-${sheet}`;
      const cached = sessionStorage.getItem(cacheKey);

      if (cached) {
        this.items = JSON.parse(cached);
        this.loading = false;
        return;
      }

      try {
        const response = await fetch(`/api/data?sheet=${sheet}`);
        const data = await response.json();
        this.items = data;
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        this.loading = false;
      }
    },

    get groups() {
      return this.items.filter(p => p.category === 'group');
    },

    get categories() {
      return [...new Set(this.items.map(p => p.category))];
    },

    filtered(category) {
      return this.items.filter(p => p.category === category && p.shown);
    },
  };
}