import { Component } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('fadeIn', [
      state('void', style({opacity: 0})),
      transition(':enter, :leave', [animate(500)])

    ])
  ]
})
export class AppComponent  {
  name = 'Angular';
  show = true;
}
