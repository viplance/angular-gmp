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

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    TitleComponent,
    UserLoginComponent
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
    UserLoginComponent
  ]
})
export class SharedModule {}
