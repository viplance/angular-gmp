import { Course, State } from 'app/modules/shared/interfaces';
import { coursesModuleFeatureName } from './reducers';

export const getCourses = (state: State): Course[] => state[coursesModuleFeatureName].courses;
