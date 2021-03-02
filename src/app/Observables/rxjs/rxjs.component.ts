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
    this.minhaPromisse('Lucas')
    .then(result => console.log(result))
    .catch(erro => console.log(erro));

    this.minhaObservable('')
      .subscribe(result => console.log(result));
  }

  minhaPromisse(nome: string) : Promise<string>{
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
      subscriber.next('Olá!');
      subscriber.next('Olá denovo!');
      setTimeout(() => {
        subscriber.next('Resposta com delay')
      }, 3000)
    });
  }
}
