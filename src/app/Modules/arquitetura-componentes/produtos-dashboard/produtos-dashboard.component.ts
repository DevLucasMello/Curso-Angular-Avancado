import { ProdutoCardDetalheComponent } from './../componentes/produto-card-detalhe/produto-card-detalhe.component';
import { ProdutoCountComponent } from '../componentes/produto-count/produto-count.component';
import { fromEvent, Observable } from 'rxjs';
import { Produto } from './../models/produto';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-produtos-dashboard',
  templateUrl: './produtos-dashboard.component.html',
  styleUrls: ['./produtos-dashboard.component.scss']
})
export class ProdutosDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[];

  @ViewChild(ProdutoCountComponent, {static: false}) contador: ProdutoCountComponent;
  //static = false pois é para trabalhar com apenas 1 elemento
  @ViewChild('teste', {static: false}) mensagemTela: ElementRef;

  @ViewChildren(ProdutoCardDetalheComponent) botao: QueryList<ProdutoCardDetalheComponent>;

  constructor() { }

  ngOnInit() {
    this.produtos = [{
      id: 1,
      nome: 'Teste',
      ativo: true,
      valor: 100,
      imagem: 'celular.jpg'
    },
    {
      id: 2,
      nome: 'Teste 2',
      ativo: true,
      valor: 200,
      imagem: 'gopro.jpg'
    },
    {
      id: 3,
      nome: 'Teste 3',
      ativo: true,
      valor: 300,
      imagem: 'laptop.jpg'
    },
    {
      id: 4,
      nome: 'Teste 4',
      ativo: true,
      valor: 400,
      imagem: 'mouse.jpg'
    },
    {
      id: 5,
      nome: 'Teste 5',
      ativo: true,
      valor: 500,
      imagem: 'teclado.jpg'
    },
    {
      id: 6,
      nome: 'Teste 6',
      ativo: false,
      valor: 600,
      imagem: 'headset.jpg'
    }];
  }

  ngAfterViewInit(): void {
    console.log('Objeto do Contador: ', this.contador.produtos);

    let clickText: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickText.subscribe(() => {
      alert('clicou no texto!')
      //Colocou return para não entrar em loop
      return;
    });

    console.log(this.botao);
    this.botao.forEach(p => {
      console.log(p.produto);
    })
  }

  mudarStatus(event: Produto){
    event.ativo = !event.ativo;
  }

}
