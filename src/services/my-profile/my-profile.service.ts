import { Injectable } from '@angular/core';
import { MyProfileInterface } from 'src/interface/my-profile';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyProfileService implements MyProfileInterface {
  port: number = 30000;
  url: string = `http://localhost:${this.port}/api/v1`;
  constructor(private _httpClient: HttpClient) {}
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  });
  async getMyProfileData(userId: string) {
    let promise = new Promise((resolve, reject) => {
      this._httpClient
        .get(`${this.url}/my-profile-details/${userId}`)
        .toPromise()
        .then((res) => {
          // Success
          resolve(res);
        })
    });
    return promise;
  }
}
