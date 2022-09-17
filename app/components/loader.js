import Component from '@glimmer/component';
import { action } from '@ember/object';
import $ from 'jquery';
import { later } from '@ember/runloop';
export default class LoaderComponent extends Component {
  @action
  fadeOut(element) {
    // Preloader
    later(() => {
      $('.loading').fadeOut(500);
    }, 2000);
  }
}
