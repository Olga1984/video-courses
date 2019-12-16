import { FindCoursePipe } from './find-course.pipe';
import { coursesList } from '../services/courses.service';

describe('FindCoursePipe', () => {
    let pipe: FindCoursePipe;
    beforeEach(() => {
        pipe = new FindCoursePipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return correct courses title containes "D"', () => {
        const val = pipe.transform(coursesList, 'D');
        expect(val[0].id).toBe('1');
    });
    it('should return correct courses title containes "bhat"', () => {
        const val = pipe.transform(coursesList, 'bhat');
        expect(val[0].id).toBe('0');
    });
});
