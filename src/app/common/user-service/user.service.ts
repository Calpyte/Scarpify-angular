import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private cookieService: CookieService) {

  }

  private userSubject = new BehaviorSubject<any>(null);

  updateData(data) {
    this.userSubject.next(data);
  }

  getData() {
    return this.userSubject;
  }

  isAuthenticated(): boolean {
    return this.userSubject.value ? true : false;
  }

}
