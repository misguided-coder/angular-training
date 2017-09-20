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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const cool_component_1 = require("./cool.component");
const person_component_1 = require("./person.component");
const city_component_1 = require("./city.component");
const car_component_1 = require("./car.component");
const employee_component_1 = require("./employee.component");
const cal_component_1 = require("./cal.component");
let AppModule = class AppModule {
    constructor() {
        console.log("Inside AppModule constructor!!!");
    }
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [cal_component_1.CalComponent, employee_component_1.EmployeeComponent, car_component_1.CarComponent, city_component_1.CityComponent, person_component_1.PersonComponent, cool_component_1.CoolComponent],
        bootstrap: [cool_component_1.CoolComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map