import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'app/modules/shared/pipes';
import { Course } from 'app/modules/shared/interfaces';
import { courses as Courses } from '../../fake-data';
import { CoursesService } from '../../services/courses.service';
import { ConfirmService } from 'app/modules/shared/services';

@Component({
  selector: 'app-courses',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: Course[];
  searchText: string;
  filter = new FilterPipe();

  constructor(private confirmService: ConfirmService, private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.refreshList();
  }

  deleteCourse(id: number): void {
    this.confirmService.showConfirmDialog({
      message: 'Do you really want to delete this course?',
      buttons: [
        {
          title: 'Yes',
          action: (): void => {
            this.coursesService.delete(id);
            this.refreshList();
            this.confirmService.close();
          }
        },
        {
          title: 'No',
          action: (): void => {
            this.confirmService.close();
          }
        }
      ]
    });
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
