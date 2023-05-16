import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { IndexedDBService } from './IndexedDB.service';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService implements OnDestroy {
  private accessToken: string;

  constructor(private http: HttpClient, private indexedDBService: IndexedDBService) { }
  ngOnDestroy(): void {
    alert("service destroyed");
  }

  setAccessToken(token: string): void {
    this.accessToken = token;
  }

  getAccessToken(): string {
    return this.accessToken;
  }

  getToken = (): Observable<any> => {
    const url = 'user/unsecure/token';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    let refreshToken = null;
    this.indexedDBService.getAccessToken().subscribe((res) => {
      refreshToken = res;
    })
    const body = {
      token: refreshToken,
    };
    return this.http.post(url, body, { headers });
  };


  login = (username: string, password: string): Observable<any> => {
    const url = 'user/unsecure/access/token';
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
