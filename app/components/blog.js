import Component from '@glimmer/component';
import { action } from '@ember/object';
import $ from 'jquery';
export default class BlogComponent extends Component {
  @action
  blogCarousel() {
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
  }
}
