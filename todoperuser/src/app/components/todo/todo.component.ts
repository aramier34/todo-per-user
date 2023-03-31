import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todos: Todo[] = [];

  constructor(
    private _todoService: TodoService
  ) {}

  ngOnInit(): void {
    this._todoService.findAll().subscribe(todos => {
      this.todos = todos;
    });
  }

  delete(id?: string) {
    if (id) {
      this._todoService.deleteById(id).subscribe();
    }
  }

  createOne() {
    const todo = new Todo("Ranger la maison", true);
    this._todoService.createOne(todo).subscribe();
  }

  updateOne(todo: Todo) {
    todo.content = "Molestias est ipsa natus."
    this._todoService.updateOne(todo).subscribe();
  }

}