import { CadastroComponent } from './Reactive-Forms/cadastro/cadastro.component';
import { SobreComponent } from './Reactive-Forms/institucional/sobre/sobre/sobre.component';
import { HomeComponent } from './Reactive-Forms/navegacao/home/home/home.component';
import {  Routes } from '@angular/router';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'cadastro', component: CadastroComponent}
];


