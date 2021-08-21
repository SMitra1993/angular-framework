import { Injectable } from '@angular/core';
import { MyProfileInterface } from 'src/interface/my-profile';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService implements MyProfileInterface {
  port: number = 30000
  url: string = `http://localhost:${this.port}/api/v1`;
  constructor(private _httpClient: HttpClient) { }

  async getMyProfileData(userId: string) {
    return await this._httpClient.get(`${this.url}/my-profile-details/${userId}`).toPromise();
  }
}
