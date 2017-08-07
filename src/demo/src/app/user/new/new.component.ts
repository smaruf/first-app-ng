import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-new-user',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @Output() userAdded: EventEmitter<User> = new EventEmitter<User>()

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  saveUser(name: HTMLInputElement, phone: HTMLInputElement) {
    const user: User = this.userService.addUser(name.value, phone.value);
    if (user.id) {
      this.userAdded.emit(user);
    }
  }
}
