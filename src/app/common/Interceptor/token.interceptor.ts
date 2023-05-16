import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, take, tap, throwError } from 'rxjs';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

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
      // tap((event: HttpEvent<any>) => {
      //   if (event instanceof HttpResponse) {
      //     console.log(event);
      //   }
      // }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.authService.getRefreshToken().pipe(
            tap((e) => {
              this.cookieService.set("token", e['token']);
              this.cookieService.set("refreshToken", e['refreshToken']);
            }),
            switchMap(() => {
              const updatedRequest = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${this.cookieService.get("token")}`)
              });
              return next.handle(updatedRequest);
            }),
            catchError((refreshError: any) => {
              this.cookieService.delete("token");
              this.cookieService.delete("refreshToken");
              return throwError(() => refreshError);
            })
          )
        } else {
          return throwError(() => error);
        }
      })
    );
  }
}
