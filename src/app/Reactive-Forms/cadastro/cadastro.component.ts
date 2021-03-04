import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';
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
  public MASKS = MASKS;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15])]);
    let senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15]), CustomValidators.equalTo(senha)]);

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required], Validators.minLength(2), Validators.maxLength(150)],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      senhaConfirmacao: senhaConfirm
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
