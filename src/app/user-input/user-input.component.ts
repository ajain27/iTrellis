import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  private userText: string;
	
  constructor(private userService: UserService) {
  this.userText = ""; 
  
  }

  ngOnInit() { }

  add() {
    if(this.userText == "") {
      return false;
    }
  	this.userService.addUserData(this.userText);
    this.userText = "";
  }
}
