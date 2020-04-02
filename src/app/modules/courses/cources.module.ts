import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'app/modules/shared/shared.module';
import { CoursesListComponent } from './components';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { FreshCourseDirective, StatusIconsDirective } from './directives';
import { DurationPipe } from './pipes/duration.pipe';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Courses' },
    component: CoursesListComponent
  }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    CoursesListComponent,
    CourseCardComponent,
    FreshCourseDirective,
    DurationPipe,
    StatusIconsDirective
  ],
  exports: [RouterModule]
})
export class CoursesModule {}
