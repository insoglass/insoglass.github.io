$(function () {
    var sub_menu = $("#sub_menu");
    var lis = sub_menu.find("li");
    lis.on("click", function () {
        $(".category").addClass("hide");
        lis.removeClass("active");
        var target = $(this).addClass("active").attr("data-target");
        $("#" + target).removeClass("hide");
    });
    $("#accordion").accordion()
    $("[data-target='projects']").click()
})