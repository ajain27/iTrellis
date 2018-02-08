import { Injectable } from '@angular/core';
import { Todo } from './Todo';

@Injectable()
export class UserService {

  private todos: Todo[];
  private nextId: number;

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

}
