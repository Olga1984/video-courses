import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../interfaces/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
    transform(value: Array<Course>, args?: string): Array<Course> {
        const direction = args[0][0];
        const column = args.replace('-', ''); // define asc or desc
        value.sort((a: any, b: any) => {
            const left = Number(new Date(a[column]));
            const right = Number(new Date(b[column]));
            return (direction === '-') ? right - left : left - right;
        });
        return value;
    }

}
