import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, tap, throwError } from 'rxjs';
import { AuthServiceService } from '../service/auth-service.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthServiceService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const clonedRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${this.authService.getToken()}`)
    });
    return next.handle(clonedRequest).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('Response Interceptor', event);
          // Handle successful response
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Unauthorized error, handle token refresh
          return this.authService.getToken().pipe(
            switchMap(() => {
              // Retry the failed request with the new token
              const updatedRequest = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${this.authService.getToken()}`)
              });
              return next.handle(updatedRequest);
            }),
            catchError((refreshError: any) => {
              // Handle refresh token error
              // You can redirect to login or perform other actions
              return throwError(() => refreshError);
            })
          );
        } else {
          // Handle other error scenarios
          return throwError(() => error);
        }
      })
    );
  }
}
