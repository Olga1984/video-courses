import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        const direction = args[0][0];
        const column = args.replace('-', ''); // define asc or desc
        console.log(direction, column);
        value.sort((a: any, b: any) => {
            const left = Number(new Date(a[column]));
            const right = Number(new Date(b[column]));
            return (direction === '-') ? right - left : left - right;
        });
        return value;
    }

}
