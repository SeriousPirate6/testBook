import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-animated-text',
  animations: [
    trigger('animatedText', [
      state('show', style({
        opacity: 1,
        marginTop: 0
      })),
      state('hide', style({
        opacity: 0,
        marginTop: '40px'
      })),
      transition('show <=> hide', [
        animate('0.5s cubic-bezier(0.61, 1, 0.88, 1)')
      ])
    ])
  ],
  template: `
    <p [@animatedText] = "state" (@animatedText.done)="showNext($event)">
      {{textToShow}}
    </p>
  `,
  styles: [
  ]
})
export class AnimatedTextComponent implements OnChanges {

  @Input() text: string | undefined;

  textToShow: string | undefined;

  state = 'show';
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.text.isFirstChange()) {
      this.textToShow = changes.text.currentValue;
    } else {
      this.state = 'hide';
    }
  }

  showNext(event: AnimationEvent) {
    console.log(event);
    if(event.toState === 'hide') {
      this.state = 'show';
      this.textToShow = this.text;
    }
  }

}
