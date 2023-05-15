import { Injectable } from '@angular/core';
import { AuthServiceService as AuthService } from './auth-service.service';
import { IndexedDBService } from './IndexedDB.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private authService: AuthService, private indexDBService : IndexedDBService) { }

  login = () => {
    this.authService.login('7708690114', '123456').subscribe(resp => {
      this.authService.setAccessToken(resp.auth);
      this.indexDBService.setRefreshToken(resp.token);
    });
  }

}
