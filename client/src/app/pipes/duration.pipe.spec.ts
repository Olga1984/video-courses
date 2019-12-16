import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
    let pipe: DurationPipe;

    beforeEach(() => {
        pipe = new DurationPipe();
    });

    it('create an instance', () => {
    expect(pipe).toBeTruthy();
    });

    it('should return correct time value less than hour', () => {
        expect(pipe.transform(8)).toBe('08min');
    });

    it('should return correct time value less than hour', () => {
        expect(pipe.transform(30)).toBe('30min');
    });

    it('should return correct time value more than hour', () => {
        expect(pipe.transform(60)).toBe('1h 00min');
    });

    it('should return correct time value more than hour', () => {
        expect(pipe.transform(120)).toBe('2h 00min');
    });
});
