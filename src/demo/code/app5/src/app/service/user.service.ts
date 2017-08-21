import {Injectable} from '@angular/core';
import {User} from "../model/user.model";
import {StorageService} from "./storage.service";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

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

  getUser(id: number): User {
    const users = this.storageService.getUsers();
    for (let i = 0; users.length; i++) {
      if (users[i].id === id) {
        return users[i];
      }
    }
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

  private subject: Subject<User> = new Subject<User>();

  observable(): Observable<User> {
    return this.subject.asObservable();
  }

  emit(user: User) {
    this.subject.next(user);
  }

}
