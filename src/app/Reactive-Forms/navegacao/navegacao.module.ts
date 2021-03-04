import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { MenuComponent } from './menu/menu/menu.component';

@NgModule({
    declarations: [
        FooterComponent,
        HomeComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        FooterComponent,
        HomeComponent,
        MenuComponent
    ]
})
export class NavegacaoModule{}