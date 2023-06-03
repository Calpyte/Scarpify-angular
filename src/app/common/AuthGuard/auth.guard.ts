import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { VerificationService } from '../verification.service';
import { UserService } from '../user-service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  userData: any = null

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private verificationService: VerificationService,
    private userService: UserService) {
    this.userService.getData().subscribe((data) => {
      if (data) {
        this.userData = data;
      } else {
        this.userData = null;
      }
    })


  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    if (this.userData) {
      return true;
    } else {
      this.verificationService.openLogin(state.url);
      return false;
    }
  }

}
