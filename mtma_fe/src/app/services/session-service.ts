import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  baseApiUrl: string = "http://localhost:3000"
  baseHeaders = {'Content-Type': 'application/json'}

  constructor(private http: HttpClient) {}

  GetToken(data: any) {
    return this.http.post(this.baseApiUrl + '/session', data, {headers: this.baseHeaders})
  }

  DeleteSession() {
    return this.http.delete(this.baseApiUrl + '/session')
  }
}
