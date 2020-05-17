import { Course } from 'app/modules/shared/interfaces';
import { featureName, State } from './reducers';

export const getCourses = (state: State): Course[] => state[featureName].courses;
