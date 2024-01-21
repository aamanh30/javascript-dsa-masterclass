import { sameSquared } from './same-squared';

describe('sameSquared', () => {
  it('should return true where the arrays are empty', () => {
    expect(sameSquared([], [])).toEqual(true);
  });

  it('should return false where the array lengths are not equal', () => {
    expect(sameSquared([], [1])).toEqual(false);
    expect(sameSquared([1], [1, 1])).toEqual(false);
  });

  it('should return false where the arrays are not same', () => {
    expect(sameSquared([1, 2, 3, 3], [9, 1, 4, 4])).toEqual(false);
    expect(sameSquared([1, 1, 3, 3], [9, 1, 1, 4])).toEqual(false);
    expect(sameSquared([1, 1], [4, 4])).toEqual(false);
  });

  it('should return true where the arrays are same', () => {
    expect(sameSquared([1], [1])).toEqual(true);
    expect(sameSquared([1, 2, 3], [9, 1, 4])).toEqual(true);
    expect(sameSquared([1, -2, -3], [9, 1, 4])).toEqual(true);
  });
});
