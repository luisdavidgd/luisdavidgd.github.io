function colorCustomizer() {
  return {
    selectedProduct: 'product1',
    products: {
      product1: {
        name: "Amazin SHe",
        zones: [
          { id: 'tobillo-ext', name: 'Outer Ankle', color: '#ef6c00' },
          { id: 'tobillo-int', name: 'Inner Ankle', color: '#00A6CB' },
          { id: 'parche1', name: 'Patch 1', color: '#e91e63' },
          { id: 'parche2', name: 'Patch 2', color: '#4caf50' },
          { id: 'talon', name: 'Heel', color: '#5d4037' },
          { id: 'cuerpo', name: 'Body', color: '#5d4037' },
          { id: 'frontal', name: 'Front', color: '#856951' },
          { id: 'punta', name: 'Toe', color: '#5d4037' },
          { id: 'ojal1', name: 'Eyelet 1', color: '#f1f5fe' },
          { id: 'ojal2', name: 'Eyelet 2', color: '#df3616' },
          { id: 'pasadores', name: 'Laces', color: '#296489' },
          { id: 'suela', name: 'Sole', color: '#9e8191' },
        ]
      },
      product2: {
        name: "Product Duke Nukem",
        zones: [
          { id: 'tobillo-ext', name: 'Outer Ankle', color: '#ef6c00' },
          { id: 'tobillo-int', name: 'Inner Ankle', color: '#00A6CB' },
          { id: 'parche1', name: 'Patch 1', color: '#e91e63' },
          { id: 'parche2', name: 'Patch 2', color: '#4caf50' },
          { id: 'talon', name: 'Heel', color: '#5d4037' },
          { id: 'cuerpo', name: 'Body', color: '#5d4037' },
          { id: 'frontal', name: 'Front', color: '#856951' },
          { id: 'punta', name: 'Toe', color: '#5d4037' },
          { id: 'ojal1', name: 'Eyelet 1', color: '#f1f5fe' },
          { id: 'ojal2', name: 'Eyelet 2', color: '#df3616' },
          { id: 'pasadores', name: 'Laces', color: '#296489' },
          { id: 'suela', name: 'Sole', color: '#9e8191' },
        ]
      }
    },
    get productOptions() {
      return Object.keys(this.products).map(key => ({
        id: key,
        name: this.products[key].name || key
      }));
    },
    get zones() {
      return this.products[this.selectedProduct]?.zones || [];
    },
    zoneImagePath(zoneId) {
      return `assets/${this.selectedProduct}/${zoneId}.png`;
    },
    baseImagePath() {
      return `assets/${this.selectedProduct}/base.png`;
    },
  }
}