import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private lS: LocalStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;

    if (this.lS.getLocal()['token']) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${this.lS.getLocal()['token']}`),
      });
    }

    return next.handle(authReq);
  }
}
