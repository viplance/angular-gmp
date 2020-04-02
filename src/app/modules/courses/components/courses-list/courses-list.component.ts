import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'app/modules/shared/pipes';
import { Course } from 'app/modules/shared/interfaces';
import { courses as Courses } from '../../fake-data';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: Course[];
  searchText: string;
  filter = new FilterPipe();

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.refreshList();
  }

  deleteCourse(id: number): void {
    this.coursesService.delete(id);
    this.refreshList();
  }

  editCourse(id: number): void {
    console.log('Edit course', id);
  }

  loadMore(): void {
    console.log('Load more');
  }

  refreshList(): void {
    this.courses = this.coursesService.getAll();
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
