import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { TopMenuComponent } from './top-menu.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TopMenuComponent
    ],
    exports: [TopMenuComponent]

})
export class TopMenuModule {
}
