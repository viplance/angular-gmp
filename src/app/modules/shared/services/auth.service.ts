import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private lS: LocalStorageService) {}

  getUserInfo(): User {
    return this.lS.getLocal()['user'];
  }

  login(user: User, token: string): void {
    this.lS.setLocal({ user, token });
  }

  logout(): void {
    this.lS.clearLocal();
  }

  isAuthenticated(): boolean {
    return this.lS.hasLocal('user');
  }
}
