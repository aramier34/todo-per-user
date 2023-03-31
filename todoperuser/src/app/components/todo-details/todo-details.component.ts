import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  public todo?: Todo;

  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    this._todoService
      .findById('2f91a38e-c267-4b4d-ae0b-1e07b475abed')
      .subscribe(todo => {
        this.todo = todo;
      })
  }

}
