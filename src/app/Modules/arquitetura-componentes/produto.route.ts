import { ProdutoAppComponent } from './../../Roteamento-Avancado/produto.app.component';
import { EditarProdutoComponent } from './../../Roteamento-Avancado/editar-produto/editar-produto.component';
import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from '@angular/router';
import { ProdutosDashboardComponent } from "./produtos-dashboard/produtos-dashboard.component";

const produtoRouterConfig: Routes = [
  {
    path: '', component: ProdutoAppComponent,
    children: [
      {path: '', component: ProdutosDashboardComponent},
      {path: 'editar/:id', component: EditarProdutoComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(produtoRouterConfig)
  ],
  exports: [
    RouterModule
  ]
})

export class ProdutoRoutingModule{}
