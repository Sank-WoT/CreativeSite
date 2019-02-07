$(function() {
  var elem = $.jInvertScroll(
    [".scroll", ".container"], // an array containing the selector(s) for the elements you want to animate
    {
      // height: 6000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
      onScroll: function(percent) {
        //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
        console.log(percent);
      }
    }
  );
  $(window).resize(function() {
    if ($(window).width() <= 768) {
      elem.destroy();
    } else {
      elem.reinitialize();
    }
  });
});

//OwlCarousel
$('.owl-carousel').owlCarousel({
  loop: true,
  nav: false,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  dots: false,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})