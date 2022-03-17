import Controller from '@ember/controller';
import { action } from '@ember/object';
import $ from 'jquery';
export default class ApplicationController extends Controller {
  @action
  scroll() {
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
    // stellar
    $(window).stellar();
  }
}
