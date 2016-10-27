import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarModule } from "./modules/sidebar/sidebar.module";
import {TopMenuModule} from "./modules/top-menu/top-menu.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SidebarModule,
        TopMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
