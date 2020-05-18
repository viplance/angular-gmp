import { ActionReducer, combineReducers } from '@ngrx/store';
import { User, State } from 'app/modules/shared/interfaces';
import * as actions from './actions';

const initialState: User = {
  id: 0,
  firstName: '',
  lastName: '',
};

const userReducer = (state: User = initialState, action: actions.SetUserAction): User => {
  switch (action.type) {
    case actions.SharedModuleActions.SET_USER: {
      return { ...action.payload };
    }

    default: {
      return state;
    }
  }
};

export const sharedModuleFeatureName = 'SharedModule';

export const combinedSharedModuleReducer: ActionReducer<object> = combineReducers({
  user: userReducer,
});
