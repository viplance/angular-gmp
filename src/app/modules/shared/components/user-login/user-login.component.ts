import { Component } from '@angular/core';
import { AuthService, LocalStorageService } from '../../services';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  isAuthenticated: boolean;

  constructor(private authService: AuthService, private lS: LocalStorageService) {
    this.lS.updateLocal.subscribe(() => {
      this.isAuthenticated = this.authService.isAuthenticated();
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
