import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app/app';
import { routes } from './app/routes'
import { providers } from './app/index';
import { Main, Notes, About} from './app/containers';
import {
    AppBar,
    NoteCard,
    NoteCreator,
    ColorPicker
} from './app/ui';

@NgModule({
    declarations: [
        App,
        Main,
        AppBar,
        NoteCard,
        Notes,
        NoteCreator,
        ColorPicker,
        About
    ],
    providers,
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routes
    ],
    bootstrap: [App]
})

export class AppModule {};

platformBrowserDynamic().bootstrapModule(AppModule);