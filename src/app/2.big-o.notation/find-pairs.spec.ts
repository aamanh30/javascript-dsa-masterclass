import { findPairs } from './find-pairs';

describe('findPairs', () => {
  it('should return the pairs to the limit', () => {
    expect(findPairs(2)).toEqual([
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1]
    ]);
  });

  it('should return empty', () => {
    expect(findPairs(0)).toEqual([]);
  });

  it('should throw exception when the limit is negative number', () => {
    expect(() => findPairs(-2)).toThrow('Limit cannot be less than 0');
  });
});
