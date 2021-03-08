import { Store } from './../../todo.store';
import { TasksService } from './../../todo.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styleUrls: ['./tasks-finalizadas.component.css']
})
export class TasksFinalizadasComponent implements OnInit {

  finalizados$: Observable<any[]>;

  constructor(private taskService: TasksService, private store: Store) {}

  ngOnInit() {
    this.finalizados$ = this.store.getToDolist().pipe(map(todolist => todolist.filter(task => task.finalizado)));
  }
}
