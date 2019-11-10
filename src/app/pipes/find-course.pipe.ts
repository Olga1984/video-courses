import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../interfaces/course';

@Pipe({
  name: 'findCourse'
})
export class FindCoursePipe implements PipeTransform {

    transform(items: Array<ICourse>, searchText: string): Array<any> {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter((course) => {
            return course.title.toLowerCase().includes(searchText);
        });
    }

}
