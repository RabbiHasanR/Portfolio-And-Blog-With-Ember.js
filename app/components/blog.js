import Component from '@glimmer/component';
import { action } from '@ember/object';
import $ from 'jquery';
export default class BlogComponent extends Component {
  @action
  blogCarousel() {
    console.log('blogCarousel');

    $('#carousel-multiple').on('slide.bs.carousel', function (e) {
      var itemsPerSlide = parseInt(
          $(this).attr('data-maximum-items-per-slide')
        ),
        totalItems = $('.carousel-item', this).length,
        reserve = 1, //do not change
        $itemsContainer = $('.carousel-inner', this),
        it = itemsPerSlide + reserve - (totalItems - e.to);
      console.log('slide items:', it, itemsPerSlide, totalItems, e.to);

      if (it > 0) {
        for (var i = 0; i < it; i++) {
          console.log('e driection:', e.direction, $itemsContainer);
          $('.carousel-item', this)
            .eq(e.direction == 'left' ? i : 0)
            // append slides to the end/beginning
            .appendTo($itemsContainer);
        }
      }
    });
  }
}
