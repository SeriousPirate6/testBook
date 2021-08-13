import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-animated-button',
  animations: [
    trigger('buttonAnimated', [
      state('over', style({
        backgroundColor: 'red'
      })),
      state('out', style({
        backgroundColor: 'white'
      })),
      state('selected', style({
        backgroundColor: 'orange'
      })),
      transition('out <=> over', [
        animate('0.5s')
      ])
    ])
  ],
  template: `
  <button
    class="button"
    [@buttonAnimated]="state"
    (mouseover)="state = 'over'"
    (mouseout)="state = 'out'"
    >
    <ng-content></ng-content>
  </button>
  `,
  styleUrls: ['./animated-button.component.css']
})
export class AnimatedButtonComponent implements OnChanges {
  
  @Input() selected = false;
  state = 'out';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
