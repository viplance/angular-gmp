import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { ActionWithPayload, User } from 'app/modules/shared/interfaces';
import { SharedModuleActions } from './actions';
import { AuthService, LocalStorageService } from '../services';

@Injectable()
export class SharedModuleEffects {
  constructor(private actions$: Actions, private authService: AuthService, private lS: LocalStorageService) {}

  @Effect()
  getUserInfo$ = this.actions$.pipe(
    ofType(SharedModuleActions.GET_USER_INFO),
    switchMap((action: ActionWithPayload) => {
      return this.authService
        .getUserInfo(action.payload)
        .pipe(map((user: User) => ({ type: SharedModuleActions.SET_USER, payload: user })));
    })
  );

  @Effect()
  setUser$ = this.actions$.pipe(
    ofType(SharedModuleActions.SET_USER),
    map((action: ActionWithPayload) => {
      this.lS.setLocal({
        user: action.payload,
      });
      return { type: SharedModuleActions.SET_USER_SUCCESS };
    })
  );
}
