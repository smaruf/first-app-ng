import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @Output() userAdded: EventEmitter<User> = new EventEmitter<User>();
  newUserForm: any;
  nameInput: any;

  constructor(private userService: UserService, formBuilder: FormBuilder) {
    this.newUserForm = formBuilder.group({
      'name': ['', Validators.required ],
      'phone': ['']
    });

    this.nameInput = this.newUserForm.controls['name']
  }

  ngOnInit() {
  }

  saveUser(name: HTMLInputElement, phone: HTMLInputElement) {
    const user: User = this.userService.addUser(name.value, phone.value);
    if (user.id) {
      this.userAdded.emit(user);
    }
  }

  onSubmit(form: any) {
    console.log(form);
  }
}
