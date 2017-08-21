import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @Output() userAdded: EventEmitter<User> = new EventEmitter<User>();
  newUserForm: any;
  nameInput: any;
  errorMessage: string;
  userName: string;

  constructor(private userService: UserService, formBuilder: FormBuilder) {
    this.newUserForm = formBuilder.group({
      'name': ['',
        [Validators.required, Validators.minLength(3), this.nameFormatValidator],
        this.checkUniqeName],
      'phone': ['']
    });

    this.nameInput = this.newUserForm.controls['name'];
    this.nameInput.valueChanges.subscribe((value) => {
      this.userName = value;
    });
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
    if (this.newUserForm.invalid) {
      if (this.newUserForm.controls['name'].hasError('nonUniqueName')) {
        this.errorMessage = "Name not unique";
      }
    } else {
      this.errorMessage = "";
    }
    console.log(form);
  }

  nameFormatValidator(control: FormControl): { [key: string]: boolean } {
    if (!(/^[A-Za-z]+/).test(control.value)) {
      return {invalidName: true}
    }
  }

  checkUniqeName(control: FormControl): Promise<{ [key: string]: boolean }> {
    return new Promise<{ [key: string]: boolean }>((resolve, reject) => {
      setTimeout(() => {
        resolve({nonUniqueName: true})
      }, 3000);
    });
  }


}
