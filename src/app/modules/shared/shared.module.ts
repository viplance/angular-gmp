import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// third party modules
import { ToastrModule } from 'ngx-toastr';

// components
import {
  BreadcrumbsComponent,
  ConfirmComponent,
  FooterComponent,
  HeaderComponent,
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
import { AuthInterceptor, HttpErrorsInterceptor } from './interceptors';

@NgModule({
  imports: [BrowserAnimationsModule, CommonModule, FormsModule, HttpClientModule, RouterModule, ToastrModule.forRoot()],
  declarations: [
    // components
    BreadcrumbsComponent,
    ConfirmComponent,
    FooterComponent,
    HeaderComponent,
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
      useClass: HttpErrorsInterceptor,
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
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ToastrModule,
    // components
    BreadcrumbsComponent,
    ConfirmComponent,
    FooterComponent,
    HeaderComponent,
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
