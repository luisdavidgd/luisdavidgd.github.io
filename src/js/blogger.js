const BLOG_ID = '5340269459019474440';
const about_page_id = '5440692623790182502';
const API_KEY = 'AIzaSyDYH8F2vTtzej0RhjfqX68-l-n00lo9414';

export async function getFeeds() {
    try {
        const blogFeeds = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`;
        const response = await fetch(blogFeeds);
        console.log('blogFeedsResponse', response);
        const data = await response.json()
        if (!data.items) {
            console.error('fetch failed', { data });
            throw new Error('No items in Data.')
        }

        const posts = data.items.map(item => {
            const id = item.id
            const author = item.author.displayName;
            const title = item.title;
            const updated = item.updated;
            const link = item.url;
            const summary = item.content;
            const comments = item.replies.totalItems;
            const thumbnail = item.images[0].url;
            const image = thumbnail.replace(/\/s\d+-c\//, '/');
            const date = formatDate(new Date(updated));

            return {
                id: id,
                author: author,
                title: title,
                date: date,
                link: link,
                image: image,
                comments: comments,
                summary: summary
            };
        });

        return posts;
    } catch (error) {
        console.error('Something went wrong.', error);
        return [
            {
                id: 1,
                author: "Autor de prueba 1",
                title: "Título de prueba 1",
                date: "2023-06-14",
                link: "#",
                image: "https://example.com/image1.jpg",
                comments: "0",
                summary: "Resumen de prueba 1"
            },
            {
                id: 2,
                author: "Autor de prueba 2",
                title: "Título de prueba 2",
                date: "2023-06-13",
                link: "#",
                image: "https://example.com/image2.jpg",
                comments: "2",
                summary: "Resumen de prueba 2"
            },
            {
                id: 3,
                author: "Autor de prueba 3",
                title: "Título de prueba 3",
                date: "2023-06-12",
                link: "#",
                image: "https://example.com/image3.jpg",
                comments: "5",
                summary: "Resumen de prueba 3"
            }
        ];
    }
}

export async function getLatestPosts() {
    const latest_post = 'https://www.googleapis.com/blogger/v3/blogs/' + BLOG_ID + '/posts?fetchBodies=true&fetchImages=true&maxResults=3&orderBy=updated&status=live&view=READER&fields=items(author%2FdisplayName%2Ccontent%2Cimages%2Creplies%2FtotalItems%2Ctitle%2Cupdated%2Curl)&key=' + API_KEY;

    const response = await fetch(latest_post);
    const data = await response.json();
    const posts = data.items.map(item => {
        const author = item.author.displayName;
        const title = item.title;
        const updated = item.updated;
        const link = item.url;
        const summary = item.content;
        const comments = item.replies.totalItems;
        const image = item.images[0].url;
        const date = formatDate(new Date(updated));

        return {
            author: author,
            title: title,
            date: date,
            link: link,
            image: image,
            comments: comments,
            summary: summary
        };
    });

    return posts;
}

export async function getAboutMePage() {
    const about_me_page = 'https://www.googleapis.com/blogger/v3/blogs/' + BLOG_ID + '/pages/' + about_page_id + '?fields=content&key=' + API_KEY;

    const response = await fetch(about_me_page);
    const data = await response.json();
    const about_me = data.content;

    return about_me;
}

function formatDate(date) {
    const monthNames = [
        "Enero", "Febrero", "Marzo",
        "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Setiembre", "Octubre",
        "Noviembre", "Diciembre"
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return monthNames[monthIndex] + ' ' + day + ', ' + year;
}
