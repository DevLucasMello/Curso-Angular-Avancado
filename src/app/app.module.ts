import { CadastroComponent } from './Reactive-Forms/cadastro/cadastro.component';
import { rootRouterConfig } from './app.routes';
import { RouterModule } from '@angular/router';
import { SobreComponent } from './Reactive-Forms/institucional/sobre/sobre/sobre.component';
import { FooterComponent } from './Reactive-Forms/navegacao/footer/footer/footer.component';
import { HomeComponent } from './Reactive-Forms/navegacao/home/home/home.component';
import { MenuComponent } from './Reactive-Forms/navegacao/menu/menu/menu.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RxjsComponent } from './Observables/component/rxjs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';
import { NgBrazil } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
