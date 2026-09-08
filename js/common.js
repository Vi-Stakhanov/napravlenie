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

    $('.slider_gallery_1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        appendArrows: $('#arrows-append_3'),
        responsive: [
            {   
              breakpoint: 1201,
              settings: {
                slidesToShow: 3
              }
            },  
            {
              breakpoint: 567,
              settings: {
                slidesToShow: 2
              }
            }   
        ]
    });

    $('.slider__card_1').slick({
        autoplay: false,
        arrows: false, 
        fade: true,
        cssEase: 'linear',
        dots: false,
        asNavFor: '.slider__card_2'
        
    });
    $('.slider__card_2').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        vertical: true,
        asNavFor: '.slider__card_1',
        focusOnSelect: true,
        appendArrows: $('#arrows-append_4')
    });
          

});