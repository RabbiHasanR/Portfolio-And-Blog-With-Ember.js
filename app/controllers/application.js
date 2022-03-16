import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { later } from '@ember/runloop';
export default class ApplicationController extends Controller {
    @tracked isLoading = true;
    constructor() {
        super(...arguments);
        later(()=>{
            this.isLoading = false;
            console.log('isLoading: ', this.isLoading);
        }, 1000);
    }
}
