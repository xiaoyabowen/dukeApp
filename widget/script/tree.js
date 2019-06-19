$(".close_menu").each(function(){
    $(this).siblings("ul").hide();
});
$(".ontree").each(function(){
    $(this).parents("ul").show();
    $(this).parents("ul").siblings().addClass("open_menu").removeClass("close_menu");
});
$(document).on("click",".close_menu span",function(){
    $(this).parent().addClass("open_menu").removeClass("close_menu");
    $(this).parent().siblings("ul").fadeIn();

});
$(document).on("click",".open_menu span",function(){
    $(this).parent().parent().find(".open_menu").addClass("close_menu").removeClass("open_menu");
    $(this).parent().parent().find("ul").hide();

});
$(document).on("click",".tree a",function(){
    $(".ontree").removeClass("ontree");
    $(this).addClass("ontree");
});