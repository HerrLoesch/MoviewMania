import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/favorite-input/favorite-input.html',
})
export class FavoriteInputPage {

  constructor(private viewController: ViewController) {

  }

    dismiss() {
      this.viewController.dismiss();
  }

}
