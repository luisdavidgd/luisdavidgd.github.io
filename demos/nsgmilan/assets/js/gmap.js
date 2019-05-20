// Map
function initMap() {
    var coord = { lat: -12.068488, lng: -77.103819 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}