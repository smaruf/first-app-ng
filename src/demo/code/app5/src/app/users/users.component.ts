import {Component, OnInit} from '@angular/core';
import {User} from "../model/user.model";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  ngOnInit() {
    this.userService.observable().subscribe((user: User) => {
      setTimeout(()=> {
        this.currentUser = user;
      }, 0);

    });
  }

  users: User[] = [];
  currentUser: User;

  constructor(private userService: UserService) {
    this.users = userService.getUsers();

  }

  // showUserDetails(user: User) {
  //   this.currentUser = user;
  // }

  isCurrentUser(user): boolean {
    return this.currentUser && this.currentUser.id === user.id;
  }


}
