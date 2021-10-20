import { Injectable } from '@angular/core';
import { MyProfileInterface } from 'src/interface/my-profile';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginInterface } from 'src/interface/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements LoginInterface {
  port: number = 30000
  url: string = `http://localhost:${this.port}/api/v1`;
  constructor(private _httpClient: HttpClient) { }
  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  
  async login(userDetails: any) {
    this.headers = this.headers.set('authorization', 'v1').set('h2','v2');
    return await this._httpClient.post(`${this.url}/login`, userDetails, {
      headers: this.headers,
    }).toPromise();
  }
}
