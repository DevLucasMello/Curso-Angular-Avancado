import { Produto } from './../../Modules/arquitetura-componentes/models/produto';
import { Injectable } from "@angular/core";


@Injectable()
export class ProdutoService {

  produtos: Produto[];


  constructor() {

    this.produtos = [
      {
        id: 1,
        nome: 'Teste',
        ativo: true,
        valor: 100,
        imagem: 'celular.jpg'
      },
      {
        id: 2,
        nome: 'Teste2',
        ativo: true,
        valor: 200,
        imagem: 'gopro.jpg'
      },
      {
        id: 3,
        nome: 'Teste3',
        ativo: true,
        valor: 300,
        imagem: 'laptop.jpg'
      },
      {
        id: 4,
        nome: 'Teste4',
        ativo: true,
        valor: 400,
        imagem: 'mouse.jpg'
      },
      {
        id: 5,
        nome: 'Teste5',
        ativo: true,
        valor: 500,
        imagem: 'teclado.jpg'
      },
      {
        id: 6,
        nome: 'Teste6',
        ativo: false,
        valor: 600,
        imagem: 'headset.jpg'
      }
    ];
  }

  obterTodos(): Produto[]{
    return this.produtos;
  }

  obterPorId(id: number): Produto{
    return this.produtos.find(produto => produto.id == id);
  }
}

