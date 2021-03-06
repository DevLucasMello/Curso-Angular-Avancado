import { TodoComponent } from './Gerenciamento-Estado/todo-list/todo.component';
import { BarComponent } from './Providers/bar-di-zones/bar.component';
import { FilmesComponent } from './Pipes-Customizados/filmes/filmes.component';
import { NotFoundComponent } from './Roteamento-Avancado/not-found/not-found.component';
import { NgModule } from "@angular/core";
import { CadastroComponent } from './Reactive-Forms/cadastro/cadastro.component';
import { SobreComponent } from './Reactive-Forms/institucional/sobre/sobre/sobre.component';
import { HomeComponent } from './Reactive-Forms/navegacao/home/home/home.component';
import {  RouterModule, Routes } from '@angular/router';

const rootRouterConfig: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'bar', component: BarComponent},
  {path: 'filmes', component: FilmesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'produtos',
          loadChildren: () => import('./Modules/arquitetura-componentes/produto.module')
        .then(m => m.ProdutoModule)},
  //Os dois ** diz que são encontrar alguma das rotas do modulo, ele passa esta rota
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(rootRouterConfig, {enableTracing: false})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}


