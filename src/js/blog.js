import { getFeeds, getLatestPosts, getAboutMePage } from './blogger.js';

function blog() {
    return {
        posts: [
            {
                id: 1,
                author: "Test Author 1",
                title: "Test Title 1",
                date: "2023-06-14",
                link: "#",
                image: "https://example.com/image1.jpg",
                comments: "0",
                summary: "Resumen de prueba 1"
            },
            {
                id: 2,
                author: "Test Author 2",
                title: "Test Title 2",
                date: "2023-06-13",
                link: "#",
                image: "https://example.com/image2.jpg",
                comments: "2",
                summary: "Resumen de prueba 2"
            },
            {
                id: 3,
                author: "Test Author 3",
                title: "Test Title 3",
                date: "2023-06-12",
                link: "#",
                image: "https://example.com/image3.jpg",
                comments: "5",
                summary: "Resumen de prueba 3"
            }
        ],
        aboutMe: '',

        async init() {
            await this.loadData();
        },

        async loadData() {
            // this.posts = await getFeeds();
            this.aboutMe = await getAboutMePage();
        }
    };
}

export default blog
