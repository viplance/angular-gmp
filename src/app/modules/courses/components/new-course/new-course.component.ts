import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { FormBuilder, Validators } from '@angular/forms';

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
  showErrors: boolean;

  courseForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    duration: ['', Validators.required],
    creationDate: ['', Validators.required],
  });

  constructor(private actions$: Actions, private fb: FormBuilder, private router: Router, private store: Store) {
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
    if (this.courseForm.valid) {
      this.store.dispatch({
        type: CoursesActions.CREATE_COURSE,
        payload: this.courseForm.value,
      });
    } else {
      this.showErrors = true;
    }
  }

  setCreationDate($event: string): void {
    this.course.creationDate = new Date($event);
  }
}
