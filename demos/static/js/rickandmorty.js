function main() {
    return {
        url: 'https://rickandmortyapi.com/api/character/',
        characters: [],
        page: 1,
        numPages: 0,
        loadData: function () {
            fetch(this.url)
                .then(response => response.json())
                .then(json => {
                    this.characters = json.results
                    this.numPages = Math.ceil(json.info.count / 20)
                })
        },
        changePage: async function (type) {
            if (type === 'next' && this.page < this.numPages) {
                this.page++;
            } else if (type === 'prev' && this.page > 1) {
                this.page--;
            }
            const response = await fetch(`${this.url}?page=${this.page}`);
            this.characters = (await response.json()).results;
        }
    }
}