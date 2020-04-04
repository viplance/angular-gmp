import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// components
import {
  ConfirmComponent,
  FooterComponent,
  HeaderComponent,
  LogoComponent,
  SearchComponent,
  TitleComponent,
  UserLoginComponent
} from './components';
// pipes
import { FilterPipe } from './pipes';
// directives
import { LabelDirective } from './directives';

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
    FilterPipe,
    // directives
    LabelDirective
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
    FilterPipe,
    // directives
    LabelDirective
  ]
})
export class SharedModule {}
