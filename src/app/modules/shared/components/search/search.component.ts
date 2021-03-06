import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  @Output() text = new EventEmitter();

  changeValue(event: Event): void {
    this.text.emit((<HTMLInputElement>event.target).value);
  }
}
