/*  --------- REVIEWS SLIDER --------- */

$('#js-reviews').slick({
    infinite: true,
    slidesToShow: 1,
    slideToScroll: 1,
    fade: true
});

$('.js-slider-prev').on('click', function(){
    $('#js-reviews').slick('slickPrev');
});

$('.js-slider-next').on('click', function(){
    $('#js-reviews').slick('slickNext');
});

/*  --------- WOW JS --------- */

var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       200,          // distance to the element when triggering the animation (default is 0)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();