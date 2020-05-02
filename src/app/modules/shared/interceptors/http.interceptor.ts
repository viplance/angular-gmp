import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'app/modules/shared/services';

@Injectable()
export class HttpRequestsInterceptor implements HttpInterceptor {
  requestCount = 0;

  constructor(private loaderService: LoaderService, private toastr: ToastrService) {}

  handleLoader(): void {
    this.loaderService.setLoaderState(this.requestCount > 0);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requestCount++;
    this.handleLoader();

    return next.handle(req).pipe(
      tap(
        (res: HttpResponse<any>) => {
          if (res instanceof HttpResponse) {
            this.requestCount--;
            this.handleLoader();
          }
        },
        (err: HttpErrorResponse) => {
          if (err instanceof HttpErrorResponse) {
            this.requestCount--;
            this.handleLoader();
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
