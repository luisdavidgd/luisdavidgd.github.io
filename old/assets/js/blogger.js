var blog_id = '5340269459019474440';
var about_page_id = '5440692623790182502';
var api_key = 'AIzaSyDYH8F2vTtzej0RhjfqX68-l-n00lo9414';

get_about_me_page();
get_feeds();
//this.get_latest_posts();

function get_feeds() {
  var blog_feeds = "https://www.ludablog.com/feeds/posts/default?max-results=3&orderby=published&alt=json-in-script";
  var posts = [];
  $.get(
    blog_feeds,
    function (data) {
      $.each(data.feed.entry, function (i, item) {
        var author = item.author[0].name.$t;
        var title = item.title.$t;
        var updated = item.updated.$t;
        var link = item.link[4].href;
        var summary = item.summary.$t;
        var comments = item.thr$total.$t
        var thumbnail = item.media$thumbnail.url;
        // remove thumbnail property with replace function xD
        var image = thumbnail.replace('s72-c/', '');
        // convert weird format date into human readable w/ formatDate function (own) D:
        var date = formatDate(new Date(updated));

        post = {};

        post['author'] = author;
        post['title'] = title;
        post['date'] = date;
        post['link'] = link;
        post['image'] = image;
        post['comments'] = comments;
        post['summary'] = summary;

        posts.push(post);
      });
    },
    "jsonp")
    .done(function () {
      $.each(posts, function (i, item) {
        $('#post-' + i + ' .post-author').html(item.author);
        $('#post-' + i + ' .post-title').html(item.title);
        $('#post-' + i + ' .post-link').attr("href", item.link);
        $('#post-' + i + ' .post-img').attr("src", item.image);
        $('#post-' + i + ' .post-summary').html(item.summary);
        $('#post-' + i + ' .post-comments').html(item.comments);
        $('#post-' + i + ' .post-date').html(item.date);
      });
    });
}

function get_latest_posts() {
  // This functions works with Blogger API
  /**
   * Issue: I don't know how to get the summary.
   */
  //var latest_post = 'https://www.googleapis.com/blogger/v3/blogs/' + blog_id + '/posts?fetchBodies=true&fetchImages=true&maxResults=3&orderBy=updated&status=live&view=READER&key=' + api_key;
  var latest_post = 'https://www.googleapis.com/blogger/v3/blogs/' + blog_id + '/posts?fetchBodies=true&fetchImages=true&maxResults=3&orderBy=updated&status=live&view=READER&fields=items(author%2FdisplayName%2Ccontent%2Cimages%2Creplies%2FtotalItems%2Ctitle%2Cupdated%2Curl)&key=' + api_key;
  var posts = [];
  $.get(
    latest_post,
    function (data) {
      console.log(data.items);
      $.each(data.items, function (i, item) {
        console.log(item);
        var author = item.author.displayName;
        var title = item.title;
        var updated = item.updated;
        var link = item.url;
        var summary = item.content;
        var comments = item.replies.totalItems;
        var image = item.images[0].url;
        // convert weird format date into human readable w/ formatDate function (own) D:
        var date = formatDate(new Date(updated));

        post = {};

        post['author'] = author;
        post['title'] = title;
        post['date'] = date;
        post['link'] = link;
        post['image'] = image;
        post['comments'] = comments;
        post['summary'] = summary;

        console.log(post);

        posts.push(post);

      });
    },
    "jsonp")
    .done(function () {
      $.each(posts, function (i, item) {
        $('#post-' + i + ' .post-author').html(item.author);
        $('#post-' + i + ' .post-title').html(item.title);
        $('#post-' + i + ' .post-link').attr("href", item.link);
        $('#post-' + i + ' .post-img').attr("src", item.image);
        $('#post-' + i + ' .post-summary').html(item.summary);
        $('#post-' + i + ' .post-comments').html(item.comments);
        $('#post-' + i + ' .post-date').html(item.date);
      });
    });
}

function formatDate(date) {
  var monthNames = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Setiembre", "Octubre",
    "Noviembre", "Diciembre"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  //return day + ' de ' + monthNames[monthIndex] + ' de ' + year;
  return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

function get_about_me_page() {
  var about_me_page = 'https://www.googleapis.com/blogger/v3/blogs/' + blog_id + '/pages/' + about_page_id + '?fields=content&key=' + api_key;
  $.get(about_me_page, function (data) {
    var about_me_html = $.parseHTML(data.content);
    var about_me = $(about_me_html).filter('#about-me').html();
    $('#about-me').html(about_me);
  });
}