import { BarServices } from './Providers/bar-di-zones/bar.service';
import { BarModule } from './Providers/bar-di-zones/bar.module';
import { FileSizePipe } from './Pipes-Customizados/filmes/filesize.pipe';
import { FilmesComponent } from './Pipes-Customizados/filmes/filmes.component';
import { CadastroComponent } from './Reactive-Forms/cadastro/cadastro.component';
import { SobreComponent } from './Reactive-Forms/institucional/sobre/sobre/sobre.component';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RxjsComponent } from './Observables/component/rxjs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';
import { NgBrazil } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation';
import { NavegacaoModule } from './Reactive-Forms/navegacao/navegacao.module';
import { AppRoutingModule } from './app.routes';

import { registerLocaleData } from "@angular/common";
import  localePt from '@angular/common/locales/pt';
import { ImageFormaterPipe } from './Pipes-Customizados/filmes/image.pipe';
import { HttpClientModule } from '@angular/common/http';
registerLocaleData(localePt);

export const BAR_PROVIDERS: Provider[] = [
  BarServices
];



@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    NavegacaoModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: '0024sgt45875ff32bc967'
    })
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    ImageFormaterPipe,
    // BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
