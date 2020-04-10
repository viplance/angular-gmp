import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { CoursesService } from '../../services';
import { Course } from 'app/modules/shared/interfaces';
import { CourseModel } from 'app/modules/shared/models';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnDestroy, OnInit {
  course: Course = new CourseModel();
  courseSubscription: Subscription;

  constructor(private coursesService: CoursesService, private activatedRoute: ActivatedRoute, private router: Router) {}

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
    this.coursesService.update(this.course).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }

  setCreationDate($event: string): void {
    this.course.creationDate = new Date($event);
  }
}
