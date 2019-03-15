var ludablog_json_in_script = "https://www.ludablog.com/feeds/posts/default?max-results=3&orderby=published&alt=json-in-script";
var posts = [];
$.get(
  ludablog_json_in_script,
  function (data) {
    $.each(data.feed.entry, function (i, item) {

      var name = item.author[0].name.$t;
      var category = item.category[0].term;
      var title = item.title.$t;
      var updated = item.updated.$t;
      var link = item.link[4].href;
      var content = item.content.$t;
      //var image = item.media$thumbnail.url;

      post = {};
      post['name'] = name;
      post['category'] = category;
      post['title'] = title;
      post['updated'] = updated;
      post['link'] = link;
      //post['image'] = image;
      post['content'] = content;

      posts.push(post);
    });
  },
  "jsonp")
  .done(function () {
    $.each(posts, function (i, item) {
      $('#post-' + i + ' .name').html(item.name);
      $('#post-' + i + ' .title').html(item.title);
      $('#post-' + i + ' .link').attr("href", item.link);
      //$('#post-' + i + ' .content').html(item.content);
    });
  });