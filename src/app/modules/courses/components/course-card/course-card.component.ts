import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Course } from 'app/modules/shared/interfaces';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('Init card component with value', this.course);
  }

  deleteCourse(): void {
    this.delete.emit(this.course.id);
  }

  editCourse(): void {
    this.edit.emit(this.course.id);
  }
}
