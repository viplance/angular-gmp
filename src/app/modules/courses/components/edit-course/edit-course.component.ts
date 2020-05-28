import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { FormBuilder, Validators } from '@angular/forms';

import { CoursesService } from '../../services';
import { Course } from 'app/modules/shared/interfaces';
import { CoursesActions } from '../../store';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnDestroy, OnInit {
  destroyed$ = new Subject<boolean>();
  id: number;
  courseSubscription: Subscription;
  showErrors: boolean;

  courseForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    duration: ['', Validators.required],
    creationDate: ['', Validators.required],
  });

  constructor(
    private actions$: Actions,
    private fb: FormBuilder,
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
      const id = parseInt(params.get('id'), 10);
      this.id = id;
      this.coursesService.getById(id).subscribe((course: Course) => {
        console.log(course);
        this.courseForm.patchValue(course);
      });
    });
  }

  ngOnDestroy(): void {
    this.courseSubscription.unsubscribe();
  }

  save(): void {
    if (this.courseForm.valid) {
      this.store.dispatch({
        type: CoursesActions.UPDATE_COURSE,
        payload: {
          ...this.courseForm.value,
          id: this.id,
        },
      });
    } else {
      this.showErrors = true;
    }
  }

  setCreationDate($event: string): void {
    // this.course.creationDate = new Date($event);
  }
}
