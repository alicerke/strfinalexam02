import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './model/todo';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos$: Observable<Todo[]> = this.todoService.getAll();

  selectedTodo: Todo = new Todo();
  fPhrase = '';
  fKey = 'title';
  sKey = '';
  validRegexp = /^[a-zA-Z0-9 \s]*$/;

  constructor(
    private todoService: TodoService,
  ) {}

  addToDeleteTodo(todo: Todo) {
    this.selectedTodo = todo;
  }

  deleteTodo(): void {
    this.todoService.remove(this.selectedTodo).subscribe(
      () => {
        this.todos$ = this.todoService.getAll();
      }
    );
  }

  sorterSelect(key: string): void {
    this.sKey = key;
  }

  addTodoActive(todo: Todo): void {
    this.selectedTodo = todo;
    this.selectedTodo.active = this.selectedTodo.active === true ? false : true;
    this.todoService.update(this.selectedTodo).subscribe(
      () => {
        this.todos$ = this.todoService.getAll();
      }
    );
  }

  onFormSubmit(todo: Todo) {
    this.selectedTodo.id = 0;
    this.todoService.create(todo).subscribe(
      () => this.todos$ = this.todoService.getAll()
    );
  }
}
