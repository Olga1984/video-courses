import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../interfaces/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipeStub implements PipeTransform {
    transform(value: Array<ICourse>, args?: string): Array<ICourse> {
        return value;
    }
}
