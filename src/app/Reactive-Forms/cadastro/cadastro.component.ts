import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../models/User';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      senha: [''],
      senhaConfirmacao: ['']
    });
  }

  adicionarUsuario(){
    //Transformar os dados do formulário em objeto
    //Parâmetro 1: Tipo específico (pode ser anônimo ou o tipo que se espera no caso User)
    //Parâmetro 2: Objeto que se espera retornar
    //Parâmetro 3: Fonte da informação onde estão os dados
    this.user = Object.assign({}, this.user, this.cadastroForm.value);
  }
}
