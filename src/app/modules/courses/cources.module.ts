import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'app/modules/shared/shared.module';
import { CoursesListComponent } from './components';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Courses' },
    component: CoursesListComponent
  }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [CoursesListComponent],
  exports: [RouterModule]
})
export class CoursesModule {}
