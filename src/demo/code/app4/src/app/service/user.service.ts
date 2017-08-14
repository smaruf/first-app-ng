import {Injectable} from '@angular/core';
import {User} from "../model/user.model";
import {StorageService} from "./storage.service";

@Injectable()
export class UserService {
  constructor(private storageService: StorageService) {
    for (let i = 0; i < 10; i++) {
      const user: User = new User();
      user.id = i + 1;
      user.name = 'User ' + i;
      user.phone = '09' + Math.ceil(Math.random() * 10000000);
      user.createdAt = new Date();
      storageService.saveUser(user);
    }
  }

  getUsers(): User[] {
    return this.storageService.getUsers();
  }

  addUser(name: string, phone: string): User {
    const user: User = new User();
    if (name && phone) {
      user.id = localStorage.length;
      user.name = name;
      user.phone = phone;
      user.createdAt = new Date();
      this.storageService.saveUser(user);
    }
    return user;
  }

}
