import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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

@NgModule({
  imports: [CommonModule, RouterModule],
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
  // providers: [ConfirmService],
  exports: [
    CommonModule,
    // components
    BreadcrumbsComponent,
    ConfirmComponent,
    FooterComponent,
    FormsModule,
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
