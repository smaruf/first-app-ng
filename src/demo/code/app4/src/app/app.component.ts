import { Component } from '@angular/core';
import {User} from "./model/user.model";
import {UserService} from "./service/user.service";

@Component({
  selector: 'app-groot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:User[] = [];
  currentUser:User;

  constructor(private userService: UserService) {
    this.users = userService.getUsers();
  }

  showUserDetails(user: User) {
    this.currentUser = user;
  }

  newUserAdded(user: User) {

    this.users.push(user);
  }
}
