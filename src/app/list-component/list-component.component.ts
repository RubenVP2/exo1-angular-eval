import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-component',
  template: `
    <div *ngIf="!cacher">
      <ul>
        <li>Jean</li>
        <li>Jacques</li>
        <li>Martin</li>
      </ul>
    </div>
  `,
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  @Input() cacher: boolean;

  constructor() { }

  ngOnInit(): void {
  }



}
