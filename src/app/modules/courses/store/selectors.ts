import { createSelector } from '@ngrx/store';
import { Course } from 'app/modules/shared/interfaces';
import { LoadCoursesAction } from './actions';
import { featureName, State } from './reducers';

export const getCoursesState = (state: State): Course[] => state[featureName].courses;
