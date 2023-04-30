import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse && err.status >= 400) {
          console.log('Server error: ' + err.message + ', status:' + err.status);
        }
        return throwError(err);
      })
    );
  }
}
