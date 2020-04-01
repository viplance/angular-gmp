import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    const hh = Math.floor(duration / 60);
    const mm = duration - hh * 60;
    return `${hh > 0 ? hh + 'h ' : ''}${mm > 0 ? mm + 'min' : ''}`.trim();
  }
}
