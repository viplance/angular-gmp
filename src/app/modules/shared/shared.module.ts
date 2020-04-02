import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  FooterComponent,
  HeaderComponent,
  LogoComponent,
  SearchComponent,
  TitleComponent,
  UserLoginComponent
} from './components';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    TitleComponent,
    UserLoginComponent,
    FilterPipe
  ],
  exports: [
    CommonModule,
    // components
    FooterComponent,
    FormsModule,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    TitleComponent,
    UserLoginComponent,
    // pipes
    FilterPipe
  ]
})
export class SharedModule {}
