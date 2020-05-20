import { User, State } from 'app/modules/shared/interfaces';
import { sharedModuleFeatureName } from './reducers';

export const getUser = (state: State): User => state[sharedModuleFeatureName].user;
