import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormatter',
})
export class TimeFormatterPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    if (value) {
      return value.toString().length == 1 ? '0' + value : value;
    }
    return value;
  }
}
