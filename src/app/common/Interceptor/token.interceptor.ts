import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, filter, finalize, mergeMap, switchMap, take, tap, throwError } from 'rxjs';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshingToken = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  constructor(private authService: AuthServiceService, private cookieService: CookieService) { }



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const clonedRequest = request.clone({
      headers: this.cookieService.get("token")
        && this.cookieService.get("token") != undefined
        && this.cookieService.get("token") != 'undefined'
        && request.headers.set('Authorization', `Bearer ${this.cookieService.get("token")}`),
      url: environment.baseUrl + request.url
    });
    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          if (!this.isRefreshingToken) {
            this.isRefreshingToken = true;
            this.refreshTokenSubject.next(null);
            this.cookieService.delete("token");
            return this.authService.getRefreshToken().pipe(
              switchMap((response) => {
                this.cookieService.set("token", response['token']);
                this.cookieService.set("refreshToken", response['refreshToken']);
                return next.handle(this.addAuthorizationHeader(request));
              }),
              catchError((refreshError: any) => {
                this.cookieService.delete("token");
                this.cookieService.delete("refreshToken");
                return throwError(() => refreshError);
              }),
              finalize(() => {
                this.isRefreshingToken = false;
              })
            )
          } else {
            return this.refreshTokenSubject.pipe(
              filter((token) => token !== null),
              take(1),
              switchMap(() => next.handle(this.addAuthorizationHeader(request)))
            );
          }

        } else {
          return throwError(() => error);
        }
      })
    );
  }

  private addAuthorizationHeader(request: HttpRequest<any>): HttpRequest<any> {
    const token = this.cookieService.get('token');
    if (token && token != 'undefined' && token != 'null' && token != undefined) {
      return request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
        url: environment.baseUrl + request.url
      });
    }
    return request;
  }
}
