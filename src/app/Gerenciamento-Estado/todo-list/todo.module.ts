import { Store } from './todo.store';
import { TasksComponent } from './components/tasks/tasks.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { TodoComponent } from './todo.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';
import { TasksService } from './todo.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    TasksService,
    Store
  ],
  declarations: [
    TodoComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    TodoListComponent,
    TasksComponent
  ],
  exports: [
    TodoComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    TodoListComponent,
    TasksComponent
  ]
})

export class TodoModule{}
