import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'app/modules/shared/shared.module';
import { CourseCardComponent, CoursesListComponent, NewCourseComponent } from './components';
import { FreshCourseDirective, StatusIconsDirective } from './directives';
import { DurationPipe } from './pipes/duration.pipe';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Courses', breadcrumbs: ['Courses'] },
    component: CoursesListComponent
  },
  {
    path: 'new',
    data: { title: 'New course', breadcrumbs: ['Courses', 'New Course'] },
    component: NewCourseComponent
  },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    CoursesListComponent,
    CourseCardComponent,
    NewCourseComponent,
    DurationPipe,
    FreshCourseDirective,
    StatusIconsDirective
  ],
  exports: [RouterModule]
})
export class CoursesModule {}
