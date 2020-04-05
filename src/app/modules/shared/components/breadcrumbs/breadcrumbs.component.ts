import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: string[];

  @HostBinding('class.hidden') get valid(): boolean {
    return this.breadcrumbs === null || (this.breadcrumbs && this.breadcrumbs.length === 0);
  }
}
