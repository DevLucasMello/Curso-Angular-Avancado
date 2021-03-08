import { Usuario } from './../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.minhaPromise('Lucas')
    .then(result => console.log(result))
    .catch(erro => console.log(erro));

    this.minhaObservable('')
    .subscribe(result => console.log(result),
    erro => console.log(erro),
    () => console.log('FIM!'));

    const observer = {
      next: valor => console.log('Next: ', valor),
      error: erro => console.log('Erro: ', erro),
      complete: () => console.log('FIM!')
    }

    // const obs = this.minhaObservable('Lucas');
    // obs.subscribe(observer);

    const obs = this.usuarioObservable('Admin', 'admin@admin.com');
    const subs = obs.subscribe(observer);
    setTimeout(() => {
      subs.unsubscribe(),
      console.log('Conexão fechada: ' + subs.closed);
    }, 3500);
  }

  minhaPromise(nome: string) : Promise<string>{
    return new Promise((resolve, reject) => {
      if(nome === 'Lucas'){
        setTimeout(() => {
          resolve('Seja bem vindo ' + nome)
        }, 1000)
      }
      else{
        reject('Ops! Você não é o Lucas');
      }
    });
  }

  minhaObservable(nome: string) : Observable<string>{
    return new Observable(subscriber => {
      if(nome === 'Lucas'){
        subscriber.next('Olá! ' + nome);
        subscriber.next('Olá denovo! ' + nome);
        setTimeout(() => {
          subscriber.next('Resposta com delay')
        }, 3000);
        subscriber.complete();
      }
      else{
        subscriber.error('Ops! Deu erro!');
      }
    });
  }

  usuarioObservable(nome: string, email: string) : Observable<Usuario>{
    return new Observable(subscriber => {
      if(nome === 'Admin'){
        let usuario = new Usuario(nome, email);

        setTimeout(() => {
          subscriber.next(usuario)
        }, 1000);

        setTimeout(() => {
          subscriber.next(usuario)
        }, 2000);

        setTimeout(() => {
          subscriber.next(usuario)
        }, 3000);

        setTimeout(() => {
          subscriber.next(usuario)
        }, 4000);

        setTimeout(() => {
          subscriber.next(usuario)
        }, 5000);
        subscriber.complete();
      }
      else{
        subscriber.error('Ops! Deu erro!');
      }
    });
  }
}
