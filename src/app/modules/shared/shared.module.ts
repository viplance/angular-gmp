import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  FooterComponent,
  HeaderComponent,
  LogoComponent,
  TitleComponent,
  UserLoginComponent
} from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FooterComponent,
    HeaderComponent,
    LogoComponent,
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
    TitleComponent,
    UserLoginComponent
  ]
})
export class SharedModule {}
