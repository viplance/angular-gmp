import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent, HeaderComponent, LogoComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent, HeaderComponent, LogoComponent],
  exports: [
    CommonModule,
    // components
    FooterComponent,
    FormsModule,
    HeaderComponent,
    LogoComponent
  ]
})
export class SharedModule {}
