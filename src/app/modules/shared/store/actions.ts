import { Action } from '@ngrx/store';
import { ActionWithPayload, User } from 'app/modules/shared/interfaces';

/* Shared Module actions */

export enum SharedModuleActions {
  GET_USER_INFO = '[SharedModule] GetUserInfo',
  SET_USER = '[SharedModule] SetUser',
  SET_USER_SUCCESS = '[SharedModule] SetUserSuccess',
}

// tslint:disable-next-line: max-classes-per-file
export class GetUserInfoAction implements Action {
  readonly type = SharedModuleActions.GET_USER_INFO;

  constructor() {}
}

// tslint:disable-next-line: max-classes-per-file
export class SetUserAction implements ActionWithPayload {
  readonly type = SharedModuleActions.SET_USER;

  constructor(public payload: User) {}
}

// tslint:disable-next-line: max-classes-per-file
export class SetUserSuccessAction implements Action {
  readonly type = SharedModuleActions.SET_USER_SUCCESS;

  constructor() {}
}
