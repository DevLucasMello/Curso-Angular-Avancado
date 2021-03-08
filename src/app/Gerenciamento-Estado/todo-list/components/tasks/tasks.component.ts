import { TasksService } from './../../todo.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  todolist$: Observable<any[]>

  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.todolist$ = this.taskService.getTodoList$;
  }

}
