import { Store } from './todo.store';
import { Task } from './task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { tap } from 'rxjs/operators';


@Injectable()
export class TasksService {

  constructor(private http: HttpClient, private store: Store) { }

  //Propriedade que está disponível para consumo do serviço. O $ indica que é do tipo Observable
  getTodoList$: Observable<Task[]> = this.http.get<Task[]>('http://localhost:3000/todolist')
  .pipe(tap(next => this.store.set('todolist', next)));

  // getToDoList(): Observable<Task[]>{
  //   return this.http.get<Task[]>('http://localhost:3000/todolist')
  // }
}
