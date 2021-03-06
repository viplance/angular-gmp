import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ActionWithPayload, Course } from 'app/modules/shared/interfaces';
import { CoursesActions } from './actions';
import { CoursesService } from '../services';

@Injectable()
export class CoursesEffects {
  constructor(private actions$: Actions, private coursesService: CoursesService) {}

  @Effect()
  loadCourses$ = this.actions$.pipe(
    ofType(CoursesActions.LOAD_COURSES),
    switchMap((action: ActionWithPayload) => {
      const { start, count, textFragment }: { start: number; count: number; textFragment: string } = action.payload;
      return this.coursesService
        .getAll({ start, count, textFragment })
        .pipe(map((courses: Course[]) => ({ type: CoursesActions.LOAD_COURSES_SUCCESS, payload: courses })));
    })
  );

  @Effect()
  createCourse$ = this.actions$.pipe(
    ofType(CoursesActions.CREATE_COURSE),
    switchMap((action: ActionWithPayload) => {
      const course: Course = action.payload;
      return this.coursesService
        .create(course)
        .pipe(map((updatedCourse: Course) => ({ type: CoursesActions.CREATE_COURSE_SUCCESS, payload: updatedCourse })));
    })
  );

  @Effect()
  updateCourse$ = this.actions$.pipe(
    ofType(CoursesActions.UPDATE_COURSE),
    switchMap((action: ActionWithPayload) => {
      const course: Course = action.payload;
      return this.coursesService
        .update(course)
        .pipe(map((updatedCourse: Course) => ({ type: CoursesActions.UPDATE_COURSE_SUCCESS, payload: updatedCourse })));
    })
  );
}
