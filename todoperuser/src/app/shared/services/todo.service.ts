import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _baseUrl = environment.urlApi + '/todos';

  constructor(private _http: HttpClient) {}

  public findAll() {
    return this._http.get<Todo[]>(this._baseUrl);
  }

  public findById(id: string) {
    return this._http.get<Todo>(this._baseUrl + '/' + id);
  }

  public deleteById(id: string) {
    return this._http.delete<Todo>(this._baseUrl + '/' + id);
  }

  public createOne(todo: Todo) {
    return this._http.post<Todo>(this._baseUrl, todo);
  }

}