import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  ConfirmComponent,
  FooterComponent,
  HeaderComponent,
  LogoComponent,
  SearchComponent,
  TitleComponent,
  UserLoginComponent
} from './components';
import { FilterPipe } from './pipes';
// import { ConfirmService } from './services';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    // components
    ConfirmComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    TitleComponent,
    UserLoginComponent,
    // pipes
    FilterPipe
  ],
  // providers: [ConfirmService],
  exports: [
    CommonModule,
    // components
    ConfirmComponent,
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
