import { Action } from '@ngrx/store';
import { ActionWithPayload, Course } from 'app/modules/shared/interfaces';

/* Courses actions */

export enum CoursesActions {
  LOAD_COURSES = '[CoursesModule] LoadCourses',
  LOAD_COURSES_SUCCESS = '[CoursesModule] LoadCoursesSuccess',
  LOAD_COURSES_FAIL = '[CoursesModule] LoadCoursesFail',
}

export class LoadCoursesAction implements ActionWithPayload {
  readonly type = CoursesActions.LOAD_COURSES;

  constructor(public payload: { start: number; count: number; textFragment: string }) {}
}

// tslint:disable-next-line: max-classes-per-file
export class LoadCoursesSuccessAction implements Action {
  readonly type = CoursesActions.LOAD_COURSES_SUCCESS;

  constructor(public payload: Course[]) {}
}
