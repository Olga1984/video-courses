import { coursesList, CoursesService } from './courses.service';

describe('CoursesService', () => {
    let service: CoursesService;

    beforeEach(() => {
        service = new CoursesService();
    });

    it('#removeCourse should delete course', () => {
        expect(service.courses.length)
            .toEqual(4);
        service.removeCourse('3');
        expect(service.courses.length)
            .toEqual(3);
    });

    it('#ggetList should return array of courses', () => {
        expect(service.getList())
            .toEqual(coursesList);
    });
});
