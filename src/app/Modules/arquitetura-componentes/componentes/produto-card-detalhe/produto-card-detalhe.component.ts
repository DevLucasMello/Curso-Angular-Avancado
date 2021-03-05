import { Produto } from './../../models/produto';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
  styleUrls: ['./produto-card-detalhe.component.scss']
})
export class ProdutoCardDetalheComponent implements OnInit {

  @Input()
  produto: Produto;

  @Output()
  status: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitirEvento(){
    this.status.emit(this.produto);
  }

}
