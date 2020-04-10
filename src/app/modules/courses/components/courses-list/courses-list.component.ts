import { Component, ChangeDetectorRef, ChangeDetectionStrategy, OnInit } from '@angular/core';
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
  start = 0;
  counter: number = environment.coursesListLength;
  courses: Course[] = [];
  filter = new FilterPipe();
  searchText: string;
  showLoadMore = true;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private confirmService: ConfirmService,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.loadCourses();
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
            this.coursesService.delete(id).subscribe(() => {
              const index = this.courses.findIndex((sours: Course) => sours.id === id);
              this.courses.splice(index, 1);
              this.changeDetectorRef.detectChanges();
              this.confirmService.close();
            });
          },
        },
      ],
    });
  }

  loadMore(): void {
    this.start += environment.coursesListLength;
    this.loadCourses();
  }

  loadCourses(): void {
    this.coursesService
      .getAll({ start: this.start, count: this.counter, textFragment: this.searchText })
      .subscribe((courses: Course[]) => {
        this.showLoadMore = courses.length === environment.coursesListLength;
        this.courses = [...this.courses, ...courses];
        this.changeDetectorRef.detectChanges();
      });
  }

  search(): void {
    this.start = 0;
    this.courses = [];
    this.loadCourses();
  }

  setSearchText(text: string): void {
    this.searchText = text;
  }
}
