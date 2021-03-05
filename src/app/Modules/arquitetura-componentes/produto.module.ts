import { ProdutoRoutingModule } from './produto.route';
import { ProdutosDashboardComponent } from './produtos-dashboard/produtos-dashboard.component';
import { ProdutoCountComponent } from './componentes/produto-count/produto-count.component';
import { ProdutoCardDetalheComponent } from './componentes/produto-card-detalhe/produto-card-detalhe.component';
import { CommonModule, registerLocaleData } from "@angular/common";
import { NgModule } from "@angular/core";
import  localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


@NgModule({
    declarations: [
        ProdutosDashboardComponent,
        ProdutoCardDetalheComponent,
        ProdutoCountComponent

    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    exports: []
})

export class ProdutoModule{}
