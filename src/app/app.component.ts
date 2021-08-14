import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container mt-3">
    <app-card title="First">
      bleah
    </app-card>
    <app-card title="Second">
      Objects in real life don’t just start and stop instantly, and almost never move at a constant speed. When we open a drawer, we first move it quickly, and slow it down as it comes out. Drop something on the floor, and it will first accelerate downwards, and then bounce back up after hitting the floor.
    </app-card>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <div class="container mt3">
    <app-animated-button
      *ngFor="let section of sections"
      (click)="active = section"
      [selected]="section.id === active.id">
        {{section.label}}
    </app-animated-button>
    <app-animated-text [text]="active.text"></app-animated-text>
  </div>
  `,
  styles: [`

  `]
})
export class AppComponent {

  title = 'test';

  sections = [
    {id: 1, label: 'FIRST', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed quam id ipsum eleifend interdum nec eu sapien.'},
    {id: 2, label: 'SECOND', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 3, label: 'THIRD', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed quam id ipsum eleifend interdum nec eu sapien. Cras tincidunt ligula et arcu consectetur tincidunt.'}
  ]

  active = this.sections[0];

  doSomething() {
    console.log("helo");
  }
}
