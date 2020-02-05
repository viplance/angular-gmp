import { Component } from '@angular/core';
import { courses as Courses } from './fake-data';

@Component({
  selector: 'app-courses',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  courses = Courses;
}
