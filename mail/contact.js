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
            var ip_url = "https://json.geoiplookup.io/";
            var ip_address = '';
            var address = '';
            $('.modal').modal('show');
            $.ajax({
                crossDomain: true,
                url: ip_url,
                method: "GET",
                dataType: "jsonp",
                cache: false,
                success: function (user_info) {
                    ip_address = user_info['ip'];
                    address = "postal_code - "+user_info['postal_code'] +", city - "+ user_info['city']+", country name - "+user_info['country_name'];
                    $this = $("#sendMessageButton");
                    $this.prop("disabled", true);
                    var script_url = "https://script.google.com/macros/s/AKfycbxsa4RuJk1b7rDSlxxA6gbSLLR-zdgjrfkRm0KqWq6Z5lA6znTkmpfRUiX8EYCvCPU/exec";
                    var url = script_url + "?Name=" + Name + "&Email=" + Email + "&Subject=" + Subject +"&Message=" + Message +"&IP=" + ip_address +"&address=" + address + "&action=insert";
                    $.ajax({
                        crossDomain: true,
                        url: url,
                        method: "GET",
                        dataType: "jsonp",
                        cache: false,
                        success: function () {
                            $('#success').html("<div class='alert alert-success'>");
                            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                            $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
                            $('#success > .alert-success').append('</div>');
                            $('#contactForm').trigger("reset");
                            $('.modal').modal('hide');
                        },
                        error: function () {
                            $('#success').html("<div class='alert alert-danger'>");
                            $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
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
                error: function () {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("IP address not found!"));
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
                },
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
