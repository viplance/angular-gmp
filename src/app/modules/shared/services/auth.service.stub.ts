import { of } from 'rxjs';

export class AuthServiceStub {
  userInfo() {}

  login() {
    return of([{}]);
  }

  getUserInfo() {
    return of({});
  }

  logout() {}

  isAuthenticated() {}
}
