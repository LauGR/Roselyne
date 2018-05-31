$(document).ready(function () {
    // For  dropdown photos 
    $('.dropdown-submenu a.linkdrop').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
    //  For animation with wow 
    new WOW().init();

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 90) {
          $(".Top").fadeIn();
        } else {
          $(".Top").fadeOut();
        }
      });
      $(".Top").click(function () {
        $("html,body").stop().animate({
          scrollTop: 0
        });
      });
});