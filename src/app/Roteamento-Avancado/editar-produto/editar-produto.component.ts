import { Produto } from './../../Modules/arquitetura-componentes/models/produto';
import { ProdutoService } from './../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto;

  constructor(private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      // console.log(params['id']);
      this.produto = this.produtoService.obterPorId(params['id']);
    });
  }

  salvar(){
    // Fazer comunicação com o back-end
    this.router.navigate(['/produtos']);

    //navigateByUrl faz o post back da página
    // this.router.navigateByUrl('/produtos');
  }
}
