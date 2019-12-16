import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipeStub implements PipeTransform {
    transform(value: number, args?: string): string {
      return `${value}`;
  }
}
