import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  
  baseApiUrl: string = "http://localhost:3000"
  baseHeaders = {'Content-Type': 'application/json'}

  constructor(private http: HttpClient) {}

  CreateUser(data: any) {
    return this.http.post(this.baseApiUrl + '/users', data, {headers: this.baseHeaders})
  }

}
