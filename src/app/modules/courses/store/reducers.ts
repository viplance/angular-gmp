import { ActionReducer, combineReducers } from '@ngrx/store';
import { Course } from 'app/modules/shared/interfaces';
import * as actions from './actions';

export const featureName = 'CoursesModule';

export interface State {
  [featureName]: {
    courses: Course[];
  };
}

const initialState = [];

const coursesReducer = (state: Course[] = initialState, action: actions.LoadCoursesSuccessAction): Course[] => {
  switch (action.type) {
    case actions.CoursesActions.LOAD_COURSES_SUCCESS: {
      return [...action.payload];
    }

    default: {
      return state;
    }
  }
};

export const combinedCoursesReducer: ActionReducer<object> = combineReducers({
  courses: coursesReducer,
});

export const getCourses = (state: State): Course[] => state[featureName].courses;
