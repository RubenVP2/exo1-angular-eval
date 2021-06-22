import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-component',
  template: `
    <ul *ngIf="!cacher">
      <li *ngFor="let per of personnes">
        {{ per }}
      </li>
    </ul>
  `,
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  personnes: Array<string> = ['Jean', 'Jacques', 'Martin'];
  @Input() cacher: boolean;

  constructor() { }

  ngOnInit(): void {
  }



}
