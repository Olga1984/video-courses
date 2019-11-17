import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
    transform(value: number, args?: string): string {
      return `${value}`;
  }
}
