import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CoursesListComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoursesListComponent],
  exports: [RouterModule
  ]
})
export class CoursesModule {}
