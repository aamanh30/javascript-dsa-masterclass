import { findNumbersUptoTen } from './find-nums-upto-ten';

describe('findNumbersUptoTen', () => {
  it('should return the numbers to the limit', () => {
    expect(findNumbersUptoTen(2)).toEqual([1, 2]);
  });

  it('should return the numbers to 10', () => {
    expect(findNumbersUptoTen(11)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should return empty', () => {
    expect(findNumbersUptoTen(0)).toEqual([]);
  });

  it('should throw exception when the limit is negative number', () => {
    expect(() => findNumbersUptoTen(-2)).toThrow('Limit cannot be less than 0');
  });
});
