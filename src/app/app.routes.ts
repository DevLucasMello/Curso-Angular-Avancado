import { NgModule } from "@angular/core";
import { CadastroComponent } from './Reactive-Forms/cadastro/cadastro.component';
import { SobreComponent } from './Reactive-Forms/institucional/sobre/sobre/sobre.component';
import { HomeComponent } from './Reactive-Forms/navegacao/home/home/home.component';
import {  RouterModule, Routes } from '@angular/router';

const rootRouterConfig: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(rootRouterConfig)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}


