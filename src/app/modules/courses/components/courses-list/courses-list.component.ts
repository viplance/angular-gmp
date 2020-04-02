import { Component } from '@angular/core';
import { courses as Courses } from './fake-data';
import { FilterPipe } from 'app/modules/shared/pipes';
import { Course } from 'app/modules/shared/interfaces';

@Component({
  selector: 'app-courses',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  courses: Course[] = Courses;
  searchText: string;
  filter = new FilterPipe();

  deleteCourse(id: number): void {
    console.log('Delete course', id);
  }

  editCourse(id: number): void {
    console.log('Edit course', id);
  }

  loadMore(): void {
    console.log('Load more');
  }

  search(): void {
    this.courses = this.filter.transform(Courses, {
      text: this.searchText,
      field: 'title'
    });
  }

  setSearchText(text: string): void {
    this.searchText = text;
  }
}
