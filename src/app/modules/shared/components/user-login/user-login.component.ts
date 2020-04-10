import { Component, ChangeDetectorRef, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AuthService, LocalStorageService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginComponent implements OnInit {
  isAuthenticated: boolean;
  userName = '';

  constructor(
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private lS: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.lS.updateLocal.subscribe(() => {
      this.isAuthenticated = this.authService.isAuthenticated();
      const userInfo = this.authService.userInfo();
      this.userName = userInfo ? `${userInfo.firstName} ${userInfo.lastName}` : '';
      this.cdr.detectChanges();
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/user/login']);
  }
}
