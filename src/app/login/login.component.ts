import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  isConnected = false;

  ngOnInit(): void {
    this.isConnected = this.loginService.isConnected;
  }

  login(): void {
     this.loginService.login();
  }

  logout(): void {
    this.loginService.logout();
  }
}
