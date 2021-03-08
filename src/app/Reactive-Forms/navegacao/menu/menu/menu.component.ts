import { Nav } from './../../../models/Nav';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  nav: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true,
      admin: false
    },
    {
      link: '/cadastro',
      name: 'Cadastro',
      exact: true,
      admin: false
    },
    {
      link: '/sobre',
      name: 'Sobre',
      exact: true,
      admin: false
    },
    {
      link: '/produtos',
      name: 'Produtos',
      exact: false,
      admin: false
    },
    {
      link: '/filmes',
      name: 'Filmes',
      exact: true,
      admin: false
    },
    {
      link: '/bar',
      name: 'Bar',
      exact: true,
      admin: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
