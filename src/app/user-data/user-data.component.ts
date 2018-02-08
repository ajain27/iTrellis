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
	
  constructor(private userService: UserService) { 
  	this.todayDate = new Date();
  }

  ngOnInit() { }

  remove() {
  	this.userService.removeUserData(this.userData.id);
  }
}
