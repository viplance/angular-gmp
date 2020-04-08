import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/modules/shared/services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  errorMessage: string;
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  get isFormValid(): boolean {
    return this.email && this.email.length > 3 && this.password && this.password.length > 5;
  }

  login(): void {
    if (this.isFormValid) {
      this.errorMessage = null;
      this.authService.login({ email: this.email, password: this.password }).subscribe((res: any) => {
        console.log(res);
        this.authService.getUserInfo();
        this.router.navigate(['/courses']);
      });
    } else {
      this.errorMessage = 'Wrong e-mail or password';
    }
  }
}
