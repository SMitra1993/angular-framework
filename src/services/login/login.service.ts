import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginInterface } from '../../interface/login';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements LoginInterface {
  port: number = 30000;
  url: string = `http://localhost:${this.port}/api/v1`;

  constructor(private _httpClient: HttpClient) {}

  // headers = new HttpHeaders({
  //   'Content-Type': 'application/json; charset=utf-8',
  // });

  async login(userId: string, password: string) {
    // this.headers = this.headers.set('authorization', 'v1').set('h2', 'v2');
    return await this._httpClient
      .post(
        `${this.url}/login`,
        { userId, password }
      )
      .toPromise();
  }

  formatUser(data: any) {
    const user = new User(data);
    return user;
  }

  setUserInLocalStorage(user: User) {
    localStorage.setItem('token', JSON.stringify(user));
  }
}
