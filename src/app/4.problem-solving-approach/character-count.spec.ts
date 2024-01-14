import { findCharacterCount } from './character-count';

describe('findCharacterCount', () => {
  it('should return empty record', () => {
    expect(findCharacterCount('')).toEqual({});
  });

  it('should return a record with count of each character', () => {
    expect(findCharacterCount('abbccc')).toEqual({ a: 1, b: 2, c: 3 });
    expect(findCharacterCount('aAccCCC')).toEqual({ a: 1, c: 2, A: 1, C: 3 });
  });
});
