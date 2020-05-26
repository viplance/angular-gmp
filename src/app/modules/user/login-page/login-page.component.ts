import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
export class LoginPageComponent implements OnDestroy {
  errorMessage: string;
  email: string;
  password: string;
  showErrors: boolean;
  userSubscription: Subscription;
  user$: Observable<User>;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, private store: Store) {
    this.user$ = store.select(getUser);
    this.userSubscription = this.user$.subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  login(): void {
    if (this.loginForm.valid) {
      this.errorMessage = null;
      const email = this.loginForm.controls.email.value;
      const password = this.loginForm.controls.password.value;
      this.authService.login({ email, password }).subscribe((token: string) => {
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
