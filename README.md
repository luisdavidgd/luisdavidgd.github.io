# luisdavidgd.github.io (luda.ga)

This starts with Meetme HTML Template from one page love [pip](https://pip.pypa.io/en/stable/)

## Custom Javascript

Bueno, para los scripts basicamente hay que referenciarlos desde el HTML
```html
{...}
<script src="assets/js/contact-form-script.min.js"></script>
<script src="assets/js/map.js"></script>
<script src="assets/js/sheets.js"></script>
<script src="assets/js/blogger.js"></script>
{...}
```


### EmailJS
Con la ayuda de validator.js y la librería Email JS con pocas líneas de código podemos tener un formulario de contacto server-off
```javascript
// Send email by Email JS
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function () {
        formSuccess();
    }).fail(function (error) {
        formError();
        submitMSG(false, JSON.stringify(error));
    });
```
### Map
Con el uso de las API De Google Maps podemos obtener facilmente los mapas :D
```javascript
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
```

### Blogger Pages
Blogger API with credentials
### Blogger Feeds
Blogger API without credentials

## Assets

### CSS
1. About
2. Animate
3. Bootstrap 4.0
4. Main
5. Nivo Lightbox
6. Responsive
7. Slicknav

### Javascript
1. Blogger
2. Bootstrap
3. Classie
4. Contact Form Script
5. Form Validator
6. jQuery 3.2.1
7. jQuery Min
8. jQuery Counter Up
9. jQuery Easing
10. jQuery Mix It Up
11. jQuery Nav
12. jQuery Slick Nav
13. Main
14. Map
15. Menu
16. Modernizr Custom
17. Nivo Lightbox
18. Nivo lightbox min
19. Popper
20. Scrolling Nav
21. Sheets
22. Video
23. Waypoints
24. Wow