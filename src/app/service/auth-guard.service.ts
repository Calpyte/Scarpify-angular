import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthServiceService} from './auth-service.service';
import { VerificationService } from '../common/verification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private verificationService: VerificationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.getAccessToken() == null || this.authService.getAccessToken() == '') {
      this.verificationService.openLogin("/login");
      return false;
    } else {
      return true;
    }
  }

}
