(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({full_width: true});
    $('.slider').slider({full_width: true});
    // $(".button-collapse").sideNav();
    $('.button-collapse').sideNav({
      menuWidth: 350, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  }); // end of document ready
})(jQuery); // end of jQuery name space
