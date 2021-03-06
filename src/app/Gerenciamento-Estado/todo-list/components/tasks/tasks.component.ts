import { Store } from './../../todo.store';
import { TasksService } from './../../todo.service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<any[]>;
  subscription: Subscription;

  constructor(private taskService: TasksService, private store: Store) {}

  ngOnInit() {
    this.todolist$ = this.store.getToDolist().pipe(map(todolist => todolist.filter(task => !task.iniciado && !task.finalizado)));

    this.subscription = this.taskService.getTodoList$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onToggle(event){
    this.taskService.toggle(event);
  }
}
