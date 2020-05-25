import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// third party modules
import { ToastrModule } from 'ngx-toastr';

// components
import {
  BreadcrumbsComponent,
  ConfirmComponent,
  FooterComponent,
  HeaderComponent,
  LoaderComponent,
  LogoComponent,
  SearchComponent,
  UserLoginComponent,
} from './components';
// pipes
import { FilterPipe } from './pipes';
// directives
import { LabelDirective } from './directives';
import { NotFoundComponent } from './components/not-found/not-found.component';
// interceptors
import { AuthInterceptor, HttpRequestsInterceptor } from './interceptors';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule, ToastrModule.forRoot()],
  declarations: [
    // components
    BreadcrumbsComponent,
    ConfirmComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    LogoComponent,
    SearchComponent,
    UserLoginComponent,
    // pipes
    FilterPipe,
    // directives
    LabelDirective,
    NotFoundComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestsInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  exports: [
    // modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule,
    // components
    BreadcrumbsComponent,
    ConfirmComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    LogoComponent,
    SearchComponent,
    UserLoginComponent,
    // pipes
    FilterPipe,
    // directives
    LabelDirective,
  ],
})
export class SharedModule {}
