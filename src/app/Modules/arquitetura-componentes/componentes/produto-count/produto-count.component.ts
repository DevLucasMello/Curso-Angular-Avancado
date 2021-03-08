import { Produto } from './../../models/produto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'produto-count',
  templateUrl: './produto-count.component.html',
  styleUrls: ['./produto-count.component.scss']
})
export class ProdutoCountComponent implements OnInit {

  @Input()
  produtos: Produto[];

  constructor() { }

  ngOnInit() {
  }

  contadorAtivos(){
    if(!this.produtos) return;

    return this.produtos.filter((produto: Produto) => produto.ativo).length;
  }

}
