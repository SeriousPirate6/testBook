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
    <app-animated-button (click)="active = !active" [selected]='active'>
      First
    </app-animated-button>
    <app-animated-button>
      Second
    </app-animated-button>
    <app-animated-button>
      Third
    </app-animated-button>
  </div>
  `,
  styles: [`

  `]
})
export class AppComponent {

  title = 'test';

  active = true;

  doSomething() {
    console.log("helo");
  }
}
