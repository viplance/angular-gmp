import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';

import { Course } from 'app/modules/shared/interfaces';
import { CourseModel } from 'app/modules/shared/models';
import { CoursesActions } from '../../store';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss'],
})
export class NewCourseComponent implements OnDestroy {
  destroyed$ = new Subject<boolean>();
  course: Course = new CourseModel();

  constructor(private actions$: Actions, private router: Router, private store: Store) {
    this.actions$
      .pipe(
        ofType(CoursesActions.CREATE_COURSE_SUCCESS),
        takeUntil(this.destroyed$),
        tap(() => this.router.navigate(['/courses']))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  add(): void {
    this.store.dispatch({
      type: CoursesActions.CREATE_COURSE,
      payload: this.course,
    });
  }

  setCreationDate($event: string): void {
    this.course.creationDate = new Date($event);
  }
}
