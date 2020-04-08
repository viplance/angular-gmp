import { Injectable } from '@angular/core';
import { HttpEvent, HttpErrorResponse, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        () => {},
        (err: HttpErrorResponse) => {
          if (err instanceof HttpErrorResponse) {
            switch (err.status) {
              case 0:
                this.toastr.error('Server is not available.', 'Connection error');
                break;
              default:
                this.toastr.error(err.message, 'Http error');
            }
          }
        }
      )
    );
  }
}
