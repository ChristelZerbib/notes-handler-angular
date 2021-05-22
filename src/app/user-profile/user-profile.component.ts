import { Component, OnInit } from '@angular/core';
import {LoginService, User} from '../services/login.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  myUser(): User {
    return this.loginService.myUser;
  }

  updateuser(userForm: NgForm): any {
    return this.loginService.update(userForm);
  }

}
