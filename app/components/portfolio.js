import Component from '@glimmer/component';
import { action } from '@ember/object';
import $ from 'jquery';

export default class PortfolioComponent extends Component {

  @action
  portfolioGallery() {
    // magnificPopup
    // $('.gallery').magnificPopup({
    //   delegate: '.link',
    //   type: 'image',
    //   gallery: {
    //     enabled: true,
    //   },
    // });
    // isotope
    $('.gallery').isotope({
      // options
      itemSelector: '.items',
      layoutMode: 'fitRows',
    });

    var $gallery = $('.gallery').isotope({
      // options
    });

    $gallery.isotope({filter: '*'});

    // filter items on button click
    $('.filtering').on('click', 'span', function () {
      var filterValue = $(this).attr('data-filter');
      console.log('filtervalue:',filterValue);
      $gallery.isotope({ filter: filterValue });
    });

    $('.filtering').on('click', 'span', function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
  }
}
