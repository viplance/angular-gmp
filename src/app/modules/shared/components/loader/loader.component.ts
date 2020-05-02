import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoaderService } from 'app/modules/shared/services';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  constructor(public loaderService: LoaderService) {}
}
