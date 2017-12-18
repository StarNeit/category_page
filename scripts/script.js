/**
 * Created by admin on 7/13/17.
 */

function changePlaceholder() {
    // search bar responsive
    if( $(window).width() <= 1352){
        $('.navbar_search').attr('placeholder','Search');
    } else {
        $('.navbar_search').attr('placeholder','Search by Companies, Categories, and News');
    }}

$(window).resize( changePlaceholder ).trigger('resize');


$(document).ready(function(){
    $(".btn_follow_on_blue_bg").on("click", function(){
        var data_key = $(this).attr("data-key");
        if (data_key == 1) {
            $(this).attr("data-key", 2);
            $(this).removeClass("btn_follow_on_blue_bg_active");
            $(this).text("Follow");
        }else{
            $(this).attr("data-key", 1);
            $(this).addClass("btn_follow_on_blue_bg_active");
            $(this).text("Following");
        }
    });
    $(".btn_follow_on_white_bg").on("click", function(){
        var data_key = $(this).attr("data-key");
        if (data_key == 1) {
            $(this).attr("data-key", 2);
            $(this).removeClass("btn_follow_on_white_bg_active");
            $(this).text("Follow");
        }else{
            $(this).attr("data-key", 1);
            $(this).addClass("btn_follow_on_white_bg_active");
            $(this).text("Following");
        }
    });

    $(".subnav_btn_follow").on("click", function(){
        var data_key = $(this).attr("data-key");
        if (data_key == 1) {
            $(this).attr("data-key", 2);
            $(this).removeClass("subnav_btn_follow_active");
            $(this).text("FOLLOW");
        }else{
            $(this).attr("data-key", 1);
            $(this).addClass("subnav_btn_follow_active");
            $(this).text("FOLLOWING");
        }
    });
});

var lastScrollTop = 0;
$(window).scroll(function () {
        var cur_pos = $(window).scrollTop();

        /*
        if (cur_pos > $(".sub_nav").offset().top){
            if ($('.sub_nav').css("display")=="none")
                return;
            $('#sub_nav').css("visibility", "hidden");
            if ($('.sub_nav_menu').css("visibility") == "hidden"){
                $('.sub_nav_menu').css("visibility", "visible");
                $(".sub_nav_menu").css("background", "#6170FF");

                $(".subnav_menu2").css("color", "#FFF");
            }
        }else{
            $('#sub_nav').css("visibility", "visible");
            $('.sub_nav_menu').css("visibility", "hidden");
            $(".sub_nav_menu").css("background", "#FFF");
            $(".subnav_menu2").css("color", "#414042");
        }

        if (cur_pos > lastScrollTop){
            $(".sub_nav_menu").css("top", "0px");
        }else {
            $(".sub_nav_menu").css("top", "80px");
        }
        lastScrollTop = cur_pos;*/
    }
);