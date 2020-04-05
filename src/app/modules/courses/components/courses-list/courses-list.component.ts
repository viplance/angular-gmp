import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FilterPipe } from 'app/modules/shared/pipes';
import { Course } from 'app/modules/shared/interfaces';
import { environment } from 'environments/environment';
import { courses as Courses } from '../../fake-data';
import { CoursesService } from '../../services/courses.service';
import { ConfirmService } from 'app/modules/shared/services';

@Component({
  selector: 'app-courses',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListComponent implements OnInit {
  counter: number = environment.coursesListLength;
  courses: Course[];
  searchText: string;
  filter = new FilterPipe();

  constructor(private confirmService: ConfirmService, private coursesService: CoursesService) {}

  get paginatedCourses(): Course[] {
    return this.courses.slice(0, this.counter);
  }

  ngOnInit(): void {
    this.refreshList();
  }

  deleteCourse(id: number): void {
    const course = this.courses.find((cour: Course) => cour.id === id);
    this.confirmService.showConfirmDialog({
      header: 'Delete course?',
      message: `Do you really want to delete ${course.title}?`,
      buttons: [
        {
          title: 'No',
          class: 'md cancel',
          action: (): void => {
            this.confirmService.close();
          },
        },
        {
          title: 'Yes, delete',
          class: 'md success',
          action: (): void => {
            this.coursesService.delete(id);
            this.refreshList();
            this.confirmService.close();
          },
        },
      ],
    });
  }

  loadMore(): void {
    this.counter += environment.coursesListLength;
    this.refreshList();
  }

  refreshList(): void {
    this.courses = this.coursesService.getAll();
  }

  search(): void {
    this.courses = this.filter.transform(Courses, {
      text: this.searchText,
      field: 'title',
    });
    this.counter = environment.coursesListLength;
  }

  setSearchText(text: string): void {
    this.searchText = text;
  }
}
