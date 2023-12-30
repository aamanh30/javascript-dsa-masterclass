import { sumUpto } from './sum-upto';

describe('sumUpto', () => {
  it('should return the sum to the limit', () => {
    expect(sumUpto(0)).toBe(0);
    expect(sumUpto(6)).toBe(21);
  });

  it('should throw exception when the limit is negative number', () => {
    expect(() => sumUpto(-2)).toThrow('Limit cannot be less than 0');
  });
});
