import { Action } from '@ngrx/store';
import { ActionWithPayload, Course } from 'app/modules/shared/interfaces';

/* Courses actions */

export enum CoursesActions {
  LOAD_COURSES = '[CoursesModule] LoadCourses',
  LOAD_COURSES_SUCCESS = '[CoursesModule] LoadCoursesSuccess',
  CREATE_COURSE = '[CoursesModule] CreateCourse',
  CREATE_COURSE_SUCCESS = '[CoursesModule] CreateCourseSuccess',
  CREATE_COURSE_FAIL = '[CoursesModule] CreateCourseFail',
  UPDATE_COURSE = '[CoursesModule] UpdateCourse',
  UPDATE_COURSE_SUCCESS = '[CoursesModule] UpdateCourseSuccess',
  UPDATE_COURSE_FAIL = '[CoursesModule] UpdateCourseFail',
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

// tslint:disable-next-line: max-classes-per-file
export class UpdateCourseAction implements ActionWithPayload {
  readonly type = CoursesActions.UPDATE_COURSE;

  constructor(public payload: Course) {}
}

// tslint:disable-next-line: max-classes-per-file
export class UpdateCourseSuccessAction implements Action {
  readonly type = CoursesActions.UPDATE_COURSE_SUCCESS;

  constructor(public payload: Course) {}
}

// tslint:disable-next-line: max-classes-per-file
export class UpdateCourseFailAction implements Action {
  readonly type = CoursesActions.UPDATE_COURSE_FAIL;

  constructor(public payload: Course) {}
}

// tslint:disable-next-line: max-classes-per-file
export class CreateCourseAction implements ActionWithPayload {
  readonly type = CoursesActions.CREATE_COURSE;

  constructor(public payload: Course) {}
}

// tslint:disable-next-line: max-classes-per-file
export class CreateCourseSuccessAction implements Action {
  readonly type = CoursesActions.CREATE_COURSE_SUCCESS;

  constructor(public payload: Course) {}
}

// tslint:disable-next-line: max-classes-per-file
export class CreateCourseFailAction implements Action {
  readonly type = CoursesActions.CREATE_COURSE_FAIL;

  constructor(public payload: Course) {}
}
