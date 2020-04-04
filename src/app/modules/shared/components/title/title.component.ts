import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() title: string;

  @HostBinding('class.hidden') get valid(): boolean {
    return this.title === null;
  }
}
