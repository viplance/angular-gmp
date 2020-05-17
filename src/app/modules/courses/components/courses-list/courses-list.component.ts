import { Component, ChangeDetectorRef, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FilterPipe } from 'app/modules/shared/pipes';
import { Course } from 'app/modules/shared/interfaces';
import { environment } from 'environments/environment';
import { CoursesService } from '../../services/courses.service';
import { ConfirmService } from 'app/modules/shared/services';
import { CoursesActions, getCourses } from '../../store';

@Component({
  selector: 'app-courses',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListComponent implements OnInit, OnDestroy {
  start = 0;
  counter: number = environment.coursesListLength;
  courses: Course[] = [];
  coursesSubscription: Subscription;
  courses$: Observable<Course[]>;
  filter = new FilterPipe();
  searchText: string;
  showLoadMore = true;
  typeSearch = new Subject();
  typeSearchSubscription: Subscription;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private confirmService: ConfirmService,
    private coursesService: CoursesService,
    private store: Store
  ) {
    this.courses$ = store.select(getCourses);
  }

  ngOnInit(): void {
    this.coursesSubscription = this.courses$.subscribe((courses: Course[]) => {
      this.showLoadMore = courses.length === environment.coursesListLength;
      this.courses = courses;
      this.changeDetectorRef.detectChanges();
    });

    this.loadCourses();

    this.typeSearchSubscription = this.typeSearch
      .pipe(
        filter((text: string) => text === '' || text.length > 2),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.search();
      });
  }

  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe();
    this.typeSearchSubscription.unsubscribe();
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
    this.store.dispatch({
      type: CoursesActions.LOAD_COURSES,
      payload: { start: this.start, count: this.counter, textFragment: this.searchText },
    });
    // this.coursesService
    //   .getAll({ start: this.start, count: this.counter, textFragment: this.searchText })
    //   .subscribe((courses: Course[]) => {
    //     this.showLoadMore = courses.length === environment.coursesListLength;
    //     this.courses = [...this.courses, ...courses];
    //     this.changeDetectorRef.detectChanges();
    //   });
  }

  search(): void {
    this.start = 0;
    this.courses = [];
    this.loadCourses();
  }

  setSearchText(text: string): void {
    this.searchText = text;
    this.typeSearch.next(text);
  }
}
