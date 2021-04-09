import {Component, OnInit} from '@angular/core';
import {LoginService, User} from '../services/login.service';
import {BASE_URL} from '../services/notes-manager.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private httpClient: HttpClient) {
  }

  isConnected;

  ngOnInit(): void {
    this.loadStateConnection();
  }


  loadStateConnection(): void {
    this.httpClient.get(`${BASE_URL}/user`).subscribe(user => {
      this.isConnected = (user as User).isConnected;
    });
  }

  login(): void {
    this.isConnected = true;
    this.loginService.login();
  }

  logout(): void {
    this.isConnected = false;
    this.loginService.logout();
  }
}
