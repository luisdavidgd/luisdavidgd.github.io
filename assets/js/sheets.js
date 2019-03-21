var sheet_id = '1cX1s0w9xRWhaIzhW_gnbo30R-IwGfH1yPGNbJ3J1BjU';
var sheet_name = 'luda.ga';
var range = 'A1:B20';
var api_key = 'AIzaSyDYH8F2vTtzej0RhjfqX68-l-n00lo9414';
var majorDimension = 'ROWS';

var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + sheet_id + '/values/' + sheet_name + '!' + range + '?key=' + api_key + '&majorDimension=' + majorDimension;

get_data();

function get_data() {
    var items = [];
    $.get(
        url,
        function (data) {
            $.each(data.values, function (i, item) {
                items.push('<li><span class="pro-title"> ' + item[0] + ' </span> <span class="pro-detail"> ' + item[1] + ' </span></li>');
            });
        },
        "jsonp")
        .done(function () {
            $("<ul/>", {
                class: "admin-profile",
                html: items.join("")
            }).appendTo(".about-profile");
        });
}


