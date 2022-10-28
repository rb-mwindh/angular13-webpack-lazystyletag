import { Component } from '@angular/core';

import test from '../test.theme.scss';

@Component({
  selector: 'app-root',
  template: `
    <div class="red">This text should be red</div>
    <div>This should be an icon: <span class="my-material-icons">search</span></div>
  `,
  styles: []
})
export class AppComponent {
  constructor() {
    test.use();
  }
}
