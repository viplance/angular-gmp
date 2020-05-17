import { Action } from '@ngrx/store';

export interface ActionWithPayload extends Action {
  // tslint:disable-next-line: no-any
  payload: any;
}
