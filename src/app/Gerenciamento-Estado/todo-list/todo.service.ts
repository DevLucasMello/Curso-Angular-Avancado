import { Task } from './task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable()
export class TasksService {

  constructor(private http: HttpClient) { }

  //Propriedade que está disponível para consumo do serviço. O $ indica que é do tipo Observable
  getTodoList$: Observable<Task[]> = this.http.get<Task[]>('http://localhost:3000/todolist');

  // getToDoList(): Observable<Task[]>{
  //   return this.http.get<Task[]>('http://localhost:3000/todolist')
  // }
}
