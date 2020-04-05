import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private lS: LocalStorageService) {}

  getUserInfo(): User {
    return this.lS.getLocal()['user'];
  }

  login({ email, password }: { email: string; password: string }): void {
    this.lS.setLocal({ user: { firstName: 'John', lastName: 'Deph' }, token: 'sdfsd4534h34jhg' });
  }

  logout(): void {
    this.lS.clearLocal();
  }

  isAuthenticated(): boolean {
    return this.lS.hasLocal('user') && this.lS.hasLocal('token');
  }
}
