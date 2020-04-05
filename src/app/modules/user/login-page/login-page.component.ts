import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/modules/shared/services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login({ id: 1, firstName: 'John', lastName: 'Depp' }, 'djh%KjhJKjh6j6');
    this.router.navigate(['/courses']);
  }
}
