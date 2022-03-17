import Component from '@glimmer/component';
import { action } from '@ember/object';
import $ from 'jquery';

export default class NavBarComponent extends Component {
  @action
  navbarScroll() {
    // navbar scrolling background
    $(window).on('scroll', function () {
      var bodyScroll = $(window).scrollTop(),
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
  }
}
