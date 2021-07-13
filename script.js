$(".color-value span").click(function () {
    $(".color-value span").removeClass("active");
    $(this).addClass("active");
    $("body").css("background", $(this).attr("data-color"));
    $(".wrapper .price").css("color", $(this).attr("data-color"));
    $(".size-value span.color").css("color", $(this).attr("data-color"));
    $(".size-value span.active").css("background", $(this).attr("data-color"));
    $(".size-value span.active").css("color", "#fff");
    $(".image img").attr("src", $(this).attr("data-img"));
    $(".btns button").css({
        "background" : $(this).attr("data-color"),
        "border-color": $(this).attr("data-color")
    });
})