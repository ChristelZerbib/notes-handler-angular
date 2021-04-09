import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from './notes-manager.service';

export type User = {
  isConnected: boolean
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isConnected;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get(`${BASE_URL}/user`).subscribe(user => {
      this.isConnected = (user as User).isConnected;
    });
  }

  login(): void {
    this.isConnected = true;
    this.httpClient.put(`${BASE_URL}/user`, {isConnected: true}).subscribe(() => {
      console.log('login ...');
    });
  }

  logout(): void {
    this.isConnected = false;
    this.httpClient.put(`${BASE_URL}/user`, {isConnected: false}).subscribe(() => {
      console.log('logout ...');
    });
  }
}
