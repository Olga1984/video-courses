import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../interfaces/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipeStub implements PipeTransform {
    transform(value: Array<Course>, args?: string): Array<Course> {
        return value;
    }
}
