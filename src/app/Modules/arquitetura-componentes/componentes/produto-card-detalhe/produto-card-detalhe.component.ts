import { Produto } from './../../models/produto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
  styleUrls: ['./produto-card-detalhe.component.scss']
})
export class ProdutoCardDetalheComponent implements OnInit {

  @Input()
  produto: Produto;

  constructor() { }

  ngOnInit() {
  }

}
