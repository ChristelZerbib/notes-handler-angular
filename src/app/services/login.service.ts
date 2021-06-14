import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from './notes-manager.service';

export type User = {
  isConnected: boolean,
  username: string,
  firstname: string,
  country: string
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  myUser: User = {
    isConnected: true,
    username: 'Zerbib',
    firstname: 'Christel',
    country: 'France'
  };

  constructor(private httpClient: HttpClient) {
    this.httpClient.get(`${BASE_URL}/user`).subscribe(user => {
      this.myUser = (user as User);
    });
  }

  login(): void {
    this.myUser.isConnected = true;
    this.httpClient.put(`${BASE_URL}/user`, {...this.myUser}).subscribe(() => {
      console.log('login ...');
    });
  }

  logout(): void {
    this.myUser.isConnected = false;
    this.httpClient.put(`${BASE_URL}/user`, {...this.myUser}).subscribe(() => {
      console.log('logout ...');
    });
  }

  update(form): void {
    this.myUser = { ...form.value, isConnected: true};
    this.httpClient.put(`${BASE_URL}/user`, this.myUser).subscribe(() => {
      console.log('user updated ...');
    });
  }

}
