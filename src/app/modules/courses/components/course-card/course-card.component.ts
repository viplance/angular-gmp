import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'app/modules/shared/interfaces';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() course: Course;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() {}

  deleteCourse(): void {
    this.delete.emit(this.course.id);
  }

  editCourse(): void {
    this.edit.emit(this.course.id);
  }
}
