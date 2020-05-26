$(function(){
    let fadeSpeed=500;
    document.getElementById('mainform').reset();
    $("#current_reg_y").on("click", function() {
        $("#div_absent_app").fadeIn(fadeSpeed);
        $("#div_check_reg").hide();
        $(".noregdiv").hide();
    });
    $("#current_reg_u").on("click", function() {
        $("#div_absent_app").hide();
        $("#div_check_reg").fadeIn(fadeSpeed);
        $(".noregdiv").hide();
    });
    $("#current_reg_n").on("click", function() {
        $("#div_absent_app").hide();
        $("#div_check_reg").hide();
        $("#div_reg_app").fadeIn(fadeSpeed, function() {
            $("#div_past_reg").fadeIn(fadeSpeed/2);
        });
    });
    $("#past_reg_y").on("click", function() {
        $("#span_documentation").hide();
        $("#div_mail").fadeIn(fadeSpeed);
    });
    $("#past_reg_n").on("click", function() {
        $("#span_documentation").fadeIn(fadeSpeed);
        $("#div_mail").fadeIn(fadeSpeed);
    });
});