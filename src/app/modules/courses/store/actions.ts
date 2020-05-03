import { Action } from '@ngrx/store';
import { Course } from 'app/modules/shared/interfaces';

/* Courses actions */

export enum CoursesActions {
  LOAD_COURSES = '[CoursesModule] LoadCourses',
  LOAD_COURSES_SUCCESS = '[CoursesModule] LoadCoursesSuccess',
  LOAD_COURSES_FAIL = '[CoursesModule] LoadCoursesFail',
}

export class LoadCoursesAction implements Action {
  readonly type = CoursesActions.LOAD_COURSES;

  constructor(public payload: Course[]) {}
}

// tslint:disable-next-line: max-classes-per-file
export class LoadCoursesSuccessAction implements Action {
  readonly type = CoursesActions.LOAD_COURSES_SUCCESS;

  constructor(public payload: Course) {}
}

// tslint:disable-next-line: max-classes-per-file
export class LoadCoursesFailAction implements Action {
  readonly type = CoursesActions.LOAD_COURSES_FAIL;

  constructor(public payload: Course) {}
}
