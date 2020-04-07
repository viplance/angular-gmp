import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
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
    // modules
    CommonModule,
    FormsModule,
    HttpClientModule,
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
