import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, tap, throwError } from 'rxjs';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthServiceService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const clonedRequest = request.clone({
      headers: this.authService.getAccessToken() && request.headers.set('Authorization', `Bearer ${this.authService.getAccessToken()}`),
      url: environment.baseUrl + request.url
    });
    return next.handle(clonedRequest).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log(event);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.authService.getToken().pipe(
            switchMap(() => {
              const updatedRequest = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${this.authService.getAccessToken()}`)
              });
              return next.handle(updatedRequest);
            }),
            catchError((refreshError: any) => {
              return throwError(() => refreshError);
            })
          );
        } else {
          return throwError(() => error);
        }
      })
    );
  }
}
