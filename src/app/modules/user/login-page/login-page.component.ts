import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'app/modules/shared/services';
import { User } from 'app/modules/shared/interfaces';
import { SharedModuleActions, getUser } from 'app/modules/shared/store';

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
  userSubscription: Subscription;
  user$: Observable<User>;

  constructor(private authService: AuthService, private router: Router, private store: Store) {
    this.user$ = store.select(getUser);
    this.userSubscription = this.user$.subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }

  get isFormValid(): boolean {
    return this.email && this.email.length > 3 && this.password && this.password.length > 5;
  }

  login(): void {
    if (this.isFormValid) {
      this.errorMessage = null;
      this.authService.login({ email: this.email, password: this.password }).subscribe((token: string) => {
        this.store.dispatch({
          type: SharedModuleActions.GET_USER_INFO,
          payload: token,
        });
      });
    } else {
      this.errorMessage = 'Wrong e-mail or password';
    }
  }
}
