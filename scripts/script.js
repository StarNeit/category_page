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



//    New Category Page
    $(".categories__content__menu__item").on("click", function(){
        $(".categories__content__menu__item").removeClass("categories__content__menu__item-active");
        $(this).addClass("categories__content__menu__item-active");
    });

    $("#menu_techuse").on("click", function(){
        $(".categories__content__main__techs").show();
        $(".categories__content__main__news").hide();
    });

    $("#menu_categorynews").on("click", function(){
        $(".categories__content__main__techs").hide();
        $(".categories__content__main__news").show();
    });


    $(".cmain_techs__sidemenu__item").on("click", function () {
        $(".cmain_techs__sidemenu__item").removeClass("cmain_techs__sidemenu__item-active");
        $(this).addClass("cmain_techs__sidemenu__item-active");
    });



    $(".header__content__follow_c, .header__content__follow_c__mobile").on("click", function(){
        var self = $(this).text().trim();
        if (self == "Follow Category"){
            $(".header__content__follow_c").text("Following Category");
            $(".header__content__follow_c__mobile").text("Following Category");
        }
        else{
            $(".header__content__follow_c").text("Follow Category");
            $(".header__content__follow_c__mobile").text("Follow Category");
        }
    });

    $(".cat_sidemenu__md_title2").on("click", function(){
        $(".cat_sidemenu input[type='checkbox']").prop("checked", false);
    });

    $(".cat_sidemenu__public_header3 input[type='checkbox']").on("click", function(){
        var len = $(".cat_sidemenu__public_header3 input[type='checkbox']:checked").length;
        if (len == 44){
            $(".cat_sidemenu__public_header2 input[type='checkbox']").prop("checked", true);
        }else{
            $(".cat_sidemenu__public_header2 input[type='checkbox']").prop("checked", false);
        }
    });

    $(".cat_sidemenu__public_header2 input[type='checkbox']").on("click", function() {
        if ($(".cat_sidemenu__public_header2 input[type='checkbox']:checked"))
            $(".cat_sidemenu__public_header3 input[type='checkbox']").prop("checked", true);
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