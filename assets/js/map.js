function iniciarMap() {
    var coord = { lat: -11.976074, lng: -76.7705568 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}