$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var Name = $("input#name").val();
            var Email = $("input#email").val();
            var Subject = $("input#subject").val();
            var Message = $("textarea#message").val();

            $this = $("#sendMessageButton");
            $this.prop("disabled", true);
            var script_url = "https://script.google.com/macros/s/AKfycbw6IQSwvjvcQgELrmUiEeyPoRznAkOR4j4VoSvqL8wh9kWbK_U2gu4BuDNX9Nh8yDU/exec";
            var url = script_url + "?Name=" + Name + "&Email=" + Email + "&Subject=" + Subject +"&Message=" + Message + "&action=insert";

            $.ajax({
                crossDomain: true,
                url: url,
                method: "GET",
                dataType: "jsonp",
                cache: false,
                success: function () {
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#success > .alert-success')
                            .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                            .append('</div>');
                    $('#contactForm').trigger("reset");
                },
                error: function () {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + Name + ", it seems that our mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false);
                    }, 1000);
                }
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
