import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginInterface } from '../../interface/login';
import { User } from '../../models/user.model';
import { AuthResponseData } from 'src/models/auth-response.model';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements LoginInterface {
  port: number = 30000;
  url: string = `http://localhost:${this.port}/api/v1`;

  constructor(private _httpClient: HttpClient) {}

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  });

  async login(userId: string, password: string) {
    const salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password, salt);
    // const saltRounds = 10;
    // bcrypt.genSalt(saltRounds, function(err, salt) {
    //   bcrypt.hash(password, salt, function(err, hash) {
    //   // returns hash
    //   console.log(hash);
    //   });
    // });
    this.headers = this.headers.set('password', password);
    return await this._httpClient
      .post(`${this.url}/login`, { userId, password }, { headers: this.headers })
      .toPromise();
  }

  formatUser(data: AuthResponseData) {
    const user = new User(data.token, data.userId);
    return user;
  }

  setUserInLocalStorage(user: User) {
    localStorage.setItem('token', JSON.stringify(user));
  }
}
