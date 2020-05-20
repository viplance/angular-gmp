import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getUserInfo(token: string): Observable<User> {
    return this.http.post(`${environment.apiUrl}/auth/userinfo`, { token }).pipe(
      map((res: any) => {
        const user: User = {
          id: res.id,
          firstName: res.name.first,
          lastName: res.name.last,
        };
        this.lS.setLocal({
          user,
        });
        return user;
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
