import {Injectable} from '@angular/core';
import {User} from "../model/user.model";

@Injectable()
export class StorageService {

  static readonly USER_STORAGE_PREFEX = 'user-';

  constructor() {
  }

  saveUser(user: User) {
    localStorage.setItem(StorageService.USER_STORAGE_PREFEX + user.id, JSON.stringify(user));
  }

  getUsers(): User[] {
    const users: User[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).startsWith(StorageService.USER_STORAGE_PREFEX)) {
        users.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return users;
  }

}
