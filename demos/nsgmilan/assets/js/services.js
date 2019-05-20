$(".feature-link").click(function (e) {
    e.preventDefault();

    feature = $(this).parent().parent();
    image = feature.find('img').attr('src');
    content = feature.find('.modal-content').html();

    $("#myModalLabel").html($(this).text());
    $("#myModalImage").attr('src', image);
    $("#myModalContent").html(content);

    $("#serviceModal").modal('show');
});