import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  user: User;
  formResult: string = '';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: [''],
      senhaConfirmacao: ['']
    });
  }

  adicionarUsuario(){
    //Desabilitar o botão se a condição estiver false
    if(this.cadastroForm.dirty && this.cadastroForm.valid){
      //Transformar os dados do formulário em objeto
    //Parâmetro 1: Tipo específico (pode ser anônimo ou o tipo que se espera no caso User)
    //Parâmetro 2: Objeto que se espera retornar
    //Parâmetro 3: Fonte da informação onde estão os dados
    this.user = Object.assign({}, this.user, this.cadastroForm.value);
    this.formResult = JSON.stringify(this.cadastroForm.value);
    }
    else{
      this.formResult = "Não submeteu!!!";
    }
  }
}
