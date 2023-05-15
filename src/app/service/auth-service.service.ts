import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private accessToken: string;

  constructor(private http: HttpClient) { }

  setAccessToken(token: string): void {
    this.accessToken = token;
  }

  getAccessToken(): string {
    return this.accessToken;
  }

  getToken = (): Observable<any> => {
    const url = 'http://103.108.220.162:9000/user/unsecure/token';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    const body = {
      token: '',
    };
    return this.http.post(url, body, { headers });
  };


  login = (username: string, password: string): Observable<any> => {
    const url = 'http://103.108.220.162:9000/user/unsecure/access/token';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    const body = {
      userName: username,
      password: password
    };
    return this.http.post(url, body, { headers });
  };

}
