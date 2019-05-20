$(".feature-link").click(function (e) {
    e.preventDefault();

    feature = $(this).parent().parent();
    image = feature.find('img').attr('src');
    paragraph = feature.find('p').text();

    $("#myModalLabel").html($(this).text());
    $("#myModalImage").attr('src', image);
    $("#myModalParagraph").html(paragraph);
    $("#serviceModal").modal('show');
});