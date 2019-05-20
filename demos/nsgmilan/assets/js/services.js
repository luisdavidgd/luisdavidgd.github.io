$(".feature").hover(
    function () {
        //$(this).append($("<span> ***</span>"));
        console.log($(this).find("h4").text());
        $("#service-0").hide();
    }, function () {
        $(this).find("span:last").remove();
        //console.log($(this).find("h5").css("display", "block"));
    }
);

$(".feature").hover(function () {
    //$("#display-service").fadeOut(100);
    //$("#display-service").fadeIn(500);
});