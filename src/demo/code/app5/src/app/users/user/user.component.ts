import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {}
  user: User;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get('id');
      this.user = this.userService.getUser(id);
      this.userService.emit(this.user);
    });
  }

}
