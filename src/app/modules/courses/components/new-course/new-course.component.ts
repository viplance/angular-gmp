import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesService } from '../../services';
import { Course } from 'app/modules/shared/interfaces';
import { CourseModel } from 'app/modules/shared/models';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss'],
})
export class NewCourseComponent {
  course: Course = new CourseModel();

  constructor(private coursesService: CoursesService, private router: Router) {}

  add(): void {
    this.coursesService.create(this.course);
    this.router.navigate(['/courses']);
  }

  setCreationDate($event): void {
    console.log($event);
    this.course.creationDate = new Date($event);
  }
}
