import { Store } from './../../todo.store';
import { TasksService } from './../../todo.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styleUrls: ['./tasks-iniciadas.component.css']
})
export class TasksIniciadasComponent implements OnInit {

  iniciados$: Observable<any[]>;

  constructor(private taskService: TasksService, private store: Store) {}

  ngOnInit() {
    this.iniciados$ = this.store.getToDolist().pipe(map(todolist => todolist.filter(task => task.iniciado && !task.finalizado)));
  }
}
