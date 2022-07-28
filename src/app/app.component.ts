import { Component } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('fadeIn', [
      // state(),
      transition('void => *', [
        style({backgroundColor: 'green', opacity: 0}),
        animate(500, style({backgroundColor: 'blue', opacity: 1}))
      ]),
      transition('* => void', [
        style({opacity: 1}),
        animate(500, style({opacity: 0}))
      ])
    ])
  ]
})
export class AppComponent  {
  name = 'Angular';
  show = true;
}
