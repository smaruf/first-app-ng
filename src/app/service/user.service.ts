import { Injectable } from '@angular/core';
import {User} from "../model/user.model";

@Injectable()
export class UserService {
  private users: User[] = [];
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.users.push(new User('User ' + i, '09' + Math.ceil(Math.random() * 10000000)));
    }
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(name:string, phone: string) {
    if (name && phone) {
      this.getUsers().push(new User(name, phone));
    }
  }

}
