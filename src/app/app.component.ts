import { Component } from '@angular/core';
import {UserService} from "./service/user.service";
import {User} from "./model/user.model";

@Component({
  selector: 'app-root',
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

  saveUser(name: HTMLInputElement, phone: HTMLInputElement) {
    this.userService.addUser(name.value, phone.value);
  }
}
