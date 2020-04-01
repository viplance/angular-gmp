import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Course } from 'app/modules/shared/interfaces';

@Directive({
  selector: '[appFreshCourse]'
})
export class FreshCourseDirective implements OnInit {
  @Input() course: Course;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const creationDate = this.course.creationDate;
    const currentDate = new Date();
    const timeDiff =
      (currentDate.getTime() - creationDate.getTime()) / (1000 * 3600 * 24);
    if (creationDate < currentDate && timeDiff >= 14) {
      this.el.nativeElement.style.border = '1px solid #9bc837';
    }
  }
}
