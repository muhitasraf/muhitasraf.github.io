saveUserIpAddress();
function saveUserIpAddress(){
    var ip_url = "https://json.geoiplookup.io/";
    var ip_address = '';
    var city = '';
    var country_name = '';
    var postal_code = '';
    var region = '';
    var district = '';
    var lat_long = '';
    var isp = '';
    var flag = 0;
    $.ajax({
        crossDomain: true,
        url: ip_url,
        method: "GET",
        dataType: "jsonp",
        cache: false,
        success: function (user_info) {
            ip_address = user_info['ip'];
            postal_code = user_info['postal_code'];
            city = user_info['city'];
            region = user_info['region'];
            district = user_info['district'];
            country_name = user_info['country_name'];
            lat_long = user_info['latitude']+','+user_info['latitude'];
            var script_url = "https://script.google.com/macros/s/AKfycbwLO4W3Jqo9ivNZydyJdZyoKhDwmFDPDHHmVMuaDcUf4jkpV__zeGj88l4ruYktpjs/exec";
            var url_read = script_url + "?action=read";
            var user_data = "";
            $.ajax({
                crossDomain: true,
                url: url_read,
                method: "GET",
                dataType: "jsonp",
                cache: false,
                success: function (json) {
                    user_data = json['records'];
                    for(var i=0; i < user_data.length; i++){
                        if(user_data[i]['ip'] != ip_address && user_data[i]['postal_code'] != postal_code && user_data[i]['city'] != city && user_data[i]['region'] != region && user_data[i]['district'] != district && user_data[i]['country_name'] != country_name){
                            flag = 1;
                        }else{
                            flag = 0;
                        }
                    }
                    if(flag == 1){
                        var url = script_url + "?ip_address=" + ip_address + "&postal_code=" + postal_code + "&city=" + city +"&region=" + region +"&district=" + district +"&country_name=" + country_name + "&lat_long=" + lat_long + "&action=insert";
                        $.ajax({
                            crossDomain: true,
                            url: url,
                            method: "GET",
                            dataType: "jsonp",
                            cache: false,
                            success: function () {
                            },
                            error: function () {
                            },
                            complete: function () {
                            }
                        }); 
                    }
                },
                error: function () {  
                },
                complete: function () {
                }
            });
        },
        error: function () {  
        },
    });
}