import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [ngModel]="text" (ngModelChange)="text=$event" />
    <br />
    <span>{{ text }}</span>
    <br />
    <button (click)="viderText()">Vider</button>
    <app-list-component [cacher]="cacher"></app-list-component>
    <button (click)="cacher = !cacher">CACHER</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text = '';

  cacher = false;

  viderText(): void {
    this.text = '';
  }
}
