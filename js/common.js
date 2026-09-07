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
          

});