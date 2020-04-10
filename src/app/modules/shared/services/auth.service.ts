import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private lS: LocalStorageService) {}

  userInfo(): User {
    return this.lS.getLocal()['user'];
  }

  login({ email, password }: { email: string; password: string }): Observable<string> {
    return this.http.post(`${environment.apiUrl}/auth/login`, { login: email, password }).pipe(
      map((res: any) => {
        if (res.token) {
          this.lS.setLocal({ token: res.token });
          return res.token;
        } else {
          return null;
        }
      })
    );
  }

  getUserInfo(token: string): Observable<void> {
    return this.http.post(`${environment.apiUrl}/auth/userinfo`, { token }).pipe(
      tap((user: any) => {
        this.lS.setLocal({
          user: {
            id: user.id,
            firstName: user.name.first,
            lastName: user.name.last,
          },
        });
      })
    );
  }

  logout(): void {
    this.lS.clearLocal();
  }

  isAuthenticated(): boolean {
    return this.lS.hasLocal('user') && this.lS.hasLocal('token');
  }
}
