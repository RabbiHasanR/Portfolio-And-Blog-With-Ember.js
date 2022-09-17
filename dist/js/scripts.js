/*-----------------------------------------------------------------------------------

    Theme Name: Personala
    Theme URI: http://
    Description: The Multi-Purpose Onepage Template
    Author: his7am
    Author URI: http://themeforest.net/user/his7am
    Version: 1.0

-----------------------------------------------------------------------------------*/

$(function () {
  'use strict';

  var wind = $(window);

  // scrollIt
  $.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: 'swing', // the easing function for animation
    scrollTime: 600, // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: -63, // offste (in px) for fixed top navigation
  });

  // navbar scrolling background
  wind.on('scroll', function () {
    var bodyScroll = wind.scrollTop(),
      navbar = $('.navbar'),
      logo = $('.navbar .logo> img');

    if (bodyScroll > 100) {
      navbar.addClass('nav-scroll');
      logo.attr('src', 'img/logo-dark.html');
    } else {
      navbar.removeClass('nav-scroll');
      logo.attr('src', 'img/logo-light.html');
    }
  });

  // progress bar
  wind.on('scroll', function () {
    $('.skills-progress span').each(function () {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var myVal = $(this).attr('data-value');
      if (bottom_of_window > bottom_of_object) {
        $(this).css({
          width: myVal,
        });
      }
    });
  });

  // sections background image from data background
  var pageSection = $('.bg-img, section');
  pageSection.each(function (indx) {
    if ($(this).attr('data-background')) {
      $(this).css(
        'background-image',
        'url(' + $(this).data('background') + ')'
      );
    }
  });

  // === owl-carousel === //

  // Testimonials owlCarousel
  $('.testimonials .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 15,
    mouseDrag: false,
    autoplay: true,
    smartSpeed: 500,
  });

  // Blog owlCarousel
  $('.blog .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: false,
    autoplay: true,
    smartSpeed: 500,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // magnificPopup
  $('.gallery').magnificPopup({
    delegate: '.link',
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  // countUp
  $('.numbers .count').countUp({
    delay: 10,
    time: 1500,
  });
});

// === window When Loading === //

$(window).on('load', function () {
  var wind = $(window);

  // Preloader
  $('.loading').fadeOut(500);

  // stellar
  wind.stellar();

  // isotope
  $('.gallery').isotope({
    // options
    itemSelector: '.items',
  });

  var $gallery = $('.gallery').isotope({
    // options
  });

  // filter items on button click
  $('.filtering').on('click', 'span', function () {
    var filterValue = $(this).attr('data-filter');

    $gallery.isotope({ filter: filterValue });
  });

  $('.filtering').on('click', 'span', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  // contact form validator
  $('#contact-form').validator();

  $('#contact-form').on('submit', function (e) {
    if (!e.isDefaultPrevented()) {
      var url = 'contact.html';

      $.ajax({
        type: 'POST',
        url: url,
        data: $(this).serialize(),
        success: function (data) {
          var messageAlert = 'alert-' + data.type;
          var messageText = data.message;

          var alertBox =
            '<div class="alert ' +
            messageAlert +
            ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
            messageText +
            '</div>';
          if (messageAlert && messageText) {
            $('#contact-form').find('.messages').html(alertBox);
            $('#contact-form')[0].reset();
          }
        },
      });
      return false;
    }
  });
});
