import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../interfaces/course';

@Pipe({
  name: 'findCourse'
})
export class FindCoursePipe implements PipeTransform {
    transform(items: Array<Course>, searchText: string): Array<Course> {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter((course) => {
            return course.name.toLowerCase().includes(searchText);
        });
    }

}
