

$(document).ready(function(){
    $('.bigSlide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        //asNavFor: '.slider-nav',
        responsive: [
            {
              breakpoint: 576,
              settings: {
                arrows: true,
                dots: true,
                slidesToShow: 1
              }
            }
        ]
      });
/*    $('.smallSlides').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 576,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
              }
            }
        ]
      });
    */
});