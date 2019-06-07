$('form.ajax').on('submit', function () {
    var form = $(this),
        url = form.attr('action'),
        type = form.attr('method'),
        data = {},
        output;

    form.find('[name]').each(function (index, value) {
        var that = $(this),
            name = that.attr('name');
        value = that.val();

        data[name] = value;
    });

    $.ajax({
        url: url,
        type: type,
        data: data,
        dataType: "json",
        success: function (response) {
            if (response.success) {
                output = '<div class="alert-success" style="padding:10px; margin-bottom:25px;">¡Mensaje enviado!</div>';
                //reset values in all input fields
                $('#form-elements input').val('');
                $('#form-elements textarea').val('');
            } else {
                output = '<div class="alert-danger" style="padding:10px; margin-bottom:25px;">No se pudo enviar el mensaje</div>';
            }

            $("#result").hide().html(output).slideDown();
        }
    });
    return false;
});

//reset previously set border colors and hide all message on .keyup()
$("#form-elements input, #form-elements textarea").keyup(function () {
    $("#result").slideUp();
});