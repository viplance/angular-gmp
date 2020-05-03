import { createSelector } from '@ngrx/store';
import { Course } from 'app/modules/shared/interfaces';
import { LoadCoursesAction } from './actions';
import { State } from './reducers';

export const getCoursesState = (state: State): Course[] => state.courses;

// export const getCourses = createSelector(getCoursesState, LoadCoursesAction);
