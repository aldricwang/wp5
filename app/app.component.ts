import { Component } from '@angular/core';
export class Day {
  id: number;
  name: string;
}
const DAYS: Day[] = [
  { id: 1, name: 'Monday' },
  { id: 2, name: 'Tuesday' },
  { id: 3, name: 'Wendesday' },
  { id: 4, name: 'Thuesday' },
  { id: 5, name: 'Friday' },
  { id: 6, name: 'Saturday' },
  { id: 7, name: 'Sunday' },
];
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Selecting Days</h2>
    <ul class="dayes">
      <li *ngFor="let day of dayes"
        [class.selected]="day === selectedDay"
        (click)="onSelect(day)">
        <span class="badge">{{day.id}}</span> {{day.name}}
      </li>
    </ul>
    <div *ngIf="selectedDay">
      <h2>{{selectedDay.name}} details!</h2>
      <div><label>id: </label>{{selectedDay.id}}</div>
      <div>
        <label>assign task: </label>
        <input [(ngModel)]="selectedDay.name" placeholder="name"/>
      </div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .dayes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .dayes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .dayes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .dayes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .dayes .text {
      position: relative;
      top: -3px;
    }
    .dayes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Assign task';
  dayes = DAYS;
  selectedDay: Day;
  onSelect(day: Day): void {
    this.selectedDay = day;
  }
}
