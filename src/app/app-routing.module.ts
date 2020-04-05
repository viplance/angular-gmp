import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './modules/shared/services';
import { NotFoundComponent } from 'app/modules/shared/components';

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () => import('./modules/courses/courses.module').then((module) => module.CoursesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then((module) => module.UserModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
