import { Injectable } from '@angular/core';
import { AuthServiceService as AuthService } from './auth-service.service';
import { IndexedDBService } from './IndexedDB.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AuthService, private indexDBService: IndexedDBService) { }

  login = (userName, password) => {
    this.authService.login(userName, password).subscribe(resp => {
      this.authService.setAccessToken(resp.auth);
      this.indexDBService.setRefreshToken(resp.token);
    });
  }

}
