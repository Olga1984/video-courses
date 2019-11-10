import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      const hours: number = Math.floor(value / 60);
      const minutes: number = (value - hours * 60);
      if (hours >= 1 && minutes > 10) {
          return hours + 'h ' + (value - hours * 60) + 'min';
      }
      if (hours >= 1 && minutes < 10) {
          return hours + 'h 0' + (value - hours * 60) + 'min';
      }
      if (hours < 1 && minutes > 10 ) {
          return '' + (value - hours * 60) + 'min';
      }
      if (hours < 1 && minutes < 10 ) {
          return '0' + (value - hours * 60) + 'min';
      }
  }
}
