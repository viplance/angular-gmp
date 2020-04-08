import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private lS: LocalStorageService) {}

  getUserInfo(): User {
    return this.lS.getLocal()['user'];
  }

  login({ email, password }: { email: string; password: string }): Observable<any> {
    // this.lS.setLocal({ user: { firstName: 'John', lastName: 'Deph' }, token: 'sdfsd4534h34jhg' });
    return this.http.post(`${environment.apiUrl}/auth/login`, { email, password });
  }

  logout(): void {
    this.lS.clearLocal();
  }

  isAuthenticated(): boolean {
    return this.lS.hasLocal('user') && this.lS.hasLocal('token');
  }
}
