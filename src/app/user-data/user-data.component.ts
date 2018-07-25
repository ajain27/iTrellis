import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../services/Todo';
import { UserService } from '../services/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

	@Input() userData: Todo;
  public todayDate: Date;
  private listOfTodoData: any[];
	
  constructor(private userService: UserService) { 
  	this.todayDate = new Date();
  }

  // Load all the todos from API service call on load
  ngOnInit() { 
    // this.listOfTodos();
  }

  remove() {
  	this.userService.removeUserData(this.userData.id);
  }

  // listOfTodos() {
  //   this.listOfTodoData = this.userService.getTodos();
  // }

  // save() {
  //   this.saveTodo = this.userService.saveTodo();
  // }
}
