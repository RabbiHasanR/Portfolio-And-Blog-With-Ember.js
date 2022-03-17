import Component from '@glimmer/component';
import { action } from '@ember/object';
import $ from 'jquery';

export default class ResumeComponent extends Component {
  @action
  progressBar() {
    // progress bar
    $(window).on('scroll', function () {
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
  }
}
