import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuardService, AuthService, AuthServiceStub } from './';

describe('AuthGuardService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: AuthService, useClass: AuthServiceStub }],
    })
  );

  it('should be created', () => {
    const service: AuthGuardService = TestBed.inject(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
