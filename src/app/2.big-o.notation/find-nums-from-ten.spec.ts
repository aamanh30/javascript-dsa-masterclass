import { findNumbersFromTen } from './find-nums-from-ten';

describe('findNumbersFromTen', () => {
  it('should return the numbers to 10', () => {
    expect(findNumbersFromTen(0)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(findNumbersFromTen(2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should return the numbers to the limit', () => {
    expect(findNumbersFromTen(11)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });

  it('should throw exception when the limit is negative number', () => {
    expect(() => findNumbersFromTen(-2)).toThrow('Limit cannot be less than 0');
  });
});
