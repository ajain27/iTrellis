import { Injectable } from '@angular/core';
import { Todo } from './Todo';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  private todos: Todo[];
  private doneTodo: Todo[];
  private nextId: number;
  private _getTodosFromAPI: any[];
  constructor() { 
  	this.todos = [];
  	this.nextId = 0;
  }

  public addUserData(text: string) : void {
  	let todo = new Todo(this.nextId, text);
  	this.todos.push(todo);
  	this.nextId++;
  }

  public getUserData() : Todo[] {
  	return this.todos;
  }

  public removeUserData(id: number) : void {
  	this.todos = this.todos.filter((todo)=> todo.id !== id);
  }


  // API calls to get and save TODO 

  // public getTodos() : void {
  //   this.http.get('URL')
  //   .subscribe(this._getTodosFromAPI = data);
  // }

  // public saveTodo(doneTodo: any) {
  //   this.http.post('POST URL', this.doneTodo);
  // }

}
