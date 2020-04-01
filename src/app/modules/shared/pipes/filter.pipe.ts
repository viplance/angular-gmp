import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(
    array: {}[],
    { text, field }: { text: string; field: string }
  ): {}[] {
    if (text && text !== '') {
      const search = text.toLowerCase();
      return array.filter((item: {}) =>
        item[field].toLowerCase().includes(search)
      );
    } else {
      return array;
    }
  }
}
