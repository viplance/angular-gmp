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

  get userName(): string {
    const userInfo = this.authService.getUserInfo();
    return userInfo ? `${userInfo.firstName} ${userInfo.lastName}` : '';
  }

  constructor(
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private lS: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.lS.updateLocal.subscribe(() => {
      this.isAuthenticated = this.authService.isAuthenticated();
      this.cdr.detectChanges();
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/user/login']);
  }
}
