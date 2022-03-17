import Component from '@glimmer/component';
import { action } from '@ember/object';
import $ from 'jquery';

export default class NumberComponent extends Component {
  @action
  numberCount() {
    // countUp
    $('.numbers .count').countUp({
      delay: 10,
      time: 1500,
    });
  }
}
