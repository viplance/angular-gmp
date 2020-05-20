import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';

import { CoursesService } from '../../services';
import { Course } from 'app/modules/shared/interfaces';
import { CourseModel } from 'app/modules/shared/models';
import { CoursesActions } from '../../store';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnDestroy, OnInit {
  destroyed$ = new Subject<boolean>();
  course: Course = new CourseModel();
  courseSubscription: Subscription;

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
    this.actions$
      .pipe(
        ofType(CoursesActions.UPDATE_COURSE_SUCCESS),
        takeUntil(this.destroyed$),
        tap(() => this.router.navigate(['/courses']))
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.courseSubscription = this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.coursesService.getById(parseInt(id, 10)).subscribe((course: Course) => {
        this.course = course;
      });
    });
  }

  ngOnDestroy(): void {
    this.courseSubscription.unsubscribe();
  }

  save(): void {
    this.store.dispatch({
      type: CoursesActions.UPDATE_COURSE,
      payload: this.course,
    });
  }

  setCreationDate($event: string): void {
    this.course.creationDate = new Date($event);
  }
}
