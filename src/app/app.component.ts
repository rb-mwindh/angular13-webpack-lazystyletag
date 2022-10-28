import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="red">This text should be red</div>
    <div>This should be an icon: <span class="my-material-icons">search</span></div>
  `,
  styles: []
})
export class AppComponent {
}
