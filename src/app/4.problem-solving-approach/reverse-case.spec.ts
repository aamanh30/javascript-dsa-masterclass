import { reverseCase } from './reverse-case';

describe('reverseCase', () => {
  it('should return empty string', () => {
    expect(reverseCase('')).toEqual('');
  });

  it('should return a string in reverse case', () => {
    expect(reverseCase('a')).toEqual('A');
    expect(reverseCase('aAccCCC')).toEqual('AaCCccc');
    expect(reverseCase('aAzZ')).toEqual('AaZz');
  });
});
