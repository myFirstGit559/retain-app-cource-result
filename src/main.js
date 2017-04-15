"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_1 = require('./app/app');
var index_1 = require('./app/index');
var containers_1 = require('./app/containers');
var ui_1 = require('./app/ui');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_1.App,
                containers_1.Main,
                ui_1.AppBar,
                ui_1.NoteCard,
                containers_1.NotesContainer,
                ui_1.NoteCreator,
                ui_1.ColorPicker
            ],
            providers: index_1.providers,
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
            bootstrap: [app_1.App]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
