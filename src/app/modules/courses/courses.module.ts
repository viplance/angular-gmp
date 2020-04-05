import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'app/modules/shared/shared.module';
import { CourseCardComponent, CoursesListComponent, EditCourseComponent, NewCourseComponent } from './components';
import { FreshCourseDirective, StatusIconsDirective } from './directives';
import { DurationPipe } from './pipes/duration.pipe';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Courses', breadcrumbs: ['Courses'] },
    component: CoursesListComponent,
  },
  {
    path: 'new',
    data: { title: 'New course', breadcrumbs: ['Courses', 'New Course'] },
    component: NewCourseComponent,
  },
  {
    path: ':id',
    data: { title: 'Edit course', breadcrumbs: ['Courses', 'Edit Course'] },
    component: EditCourseComponent,
  },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    CoursesListComponent,
    CourseCardComponent,
    EditCourseComponent,
    NewCourseComponent,
    DurationPipe,
    FreshCourseDirective,
    StatusIconsDirective,
  ],
  exports: [RouterModule],
})
export class CoursesModule {}
