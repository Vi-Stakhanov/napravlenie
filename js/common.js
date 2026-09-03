$(document).ready(function() {
    $('.burger, .menu-close').click(function() {
        $('.menu-mob').slideToggle();
    });

    $('.slider_intro_1').slick({
        autoplay: false,
        arrows: true, 
        //fade: true,
        //cssEase: 'linear',
        dots: false,
        appendArrows: $('#arrows-append_1') 
    }); 

    $('.slider_story_1').slick({
        autoplay: false,
        arrows: true, 
        //fade: true,
        //cssEase: 'linear',
        dots: false,
        appendArrows: $('#arrows-append_2') 
    }); 
          

});