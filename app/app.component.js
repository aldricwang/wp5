"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Day = (function () {
    function Day() {
    }
    return Day;
}());
exports.Day = Day;
var DAYS = [
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wendesday' },
    { id: 4, name: 'Thuesday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' },
    { id: 7, name: 'Sunday' },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Assign task';
        this.dayes = DAYS;
    }
    AppComponent.prototype.onSelect = function (day) {
        this.selectedDay = day;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>Selecting Days</h2>\n    <ul class=\"dayes\">\n      <li *ngFor=\"let day of dayes\"\n        [class.selected]=\"day === selectedDay\"\n        (click)=\"onSelect(day)\">\n        <span class=\"badge\">{{day.id}}</span> {{day.name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedDay\">\n      <h2>{{selectedDay.name}} details!</h2>\n      <div><label>id: </label>{{selectedDay.id}}</div>\n      <div>\n        <label>assign task: </label>\n        <input [(ngModel)]=\"selectedDay.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .dayes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .dayes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .dayes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .dayes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .dayes .text {\n      position: relative;\n      top: -3px;\n    }\n    .dayes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map