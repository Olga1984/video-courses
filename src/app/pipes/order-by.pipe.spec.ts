import { OrderByPipe } from './order-by.pipe';
import { CoursesList } from '../constants/courses-list';

describe('OrderByPipe', () => {
    let pipe: OrderByPipe;

    beforeEach(() => {
        pipe = new OrderByPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return sorted array of courses "descending" order', () => {
        const val = pipe.transform(CoursesList, '-creationDate');
        expect(val[0].creationDate).toEqual('12/09/2019');
        expect(val[1].creationDate).toEqual('11/09/2019');
        expect(val[2].creationDate).toEqual('10/30/2019');
        expect(val[3].creationDate).toEqual('07/30/2019');
    });
    it('should return sorted array of courses "ascending" order', () => {
        const val = pipe.transform(CoursesList, 'creationDate');
        expect(val[0].creationDate).toEqual('07/30/2019');
        expect(val[1].creationDate).toEqual('10/30/2019');
        expect(val[2].creationDate).toEqual('11/09/2019');
        expect(val[3].creationDate).toEqual('12/09/2019');

    });
});
