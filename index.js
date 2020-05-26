$(function(){
    let fadeSpeed=500;
    document.getElementById('mainform').reset();
    $("#current_reg_y").on("click", function() {
        $("#div_absent_app").fadeIn(fadeSpeed);
        $("#div_check_reg").hide();
        $("#div_notregged div").hide();
    });
    $("#current_reg_u").on("click", function() {
        $("#div_absent_app").hide();
        $("#div_check_reg").fadeIn(fadeSpeed);
        $("#div_notregged div").hide();
    });
    $("#current_reg_n").on("click", function() {
        $("#div_absent_app").hide();
        $("#div_check_reg").hide();
        $("#div_notregged").show();
        $("#div_past_reg .btn-group").show();
        $("#div_reg_app").fadeIn(fadeSpeed, function() {
            $("#div_past_reg").fadeIn(fadeSpeed);
        });
    });
    $("#past_reg_y").on("click", function() {
        $("#div_documentation").hide();
        $("#div_mail").fadeIn(fadeSpeed);
    });
    $("#past_reg_n").on("click", function() {
        $("#div_documentation").fadeIn(fadeSpeed, function() {
            $("#div_mail").fadeIn(fadeSpeed);
        });
    });
});