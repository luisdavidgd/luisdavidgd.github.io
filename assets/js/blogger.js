var ludablog_json_in_script = "https://www.ludablog.com/feeds/posts/default?max-results=3&orderby=published&alt=json-in-script";
var posts = [];
$.get(
  ludablog_json_in_script,
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