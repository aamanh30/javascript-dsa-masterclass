import { countUpDown } from './count-up-down';

describe('countUpDown', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should count up and down to the limit', () => {
    countUpDown(2);

    expect(console.log).toHaveBeenCalledTimes(8);
  });

  it('should log only info', () => {
    countUpDown(0);

    expect(console.log).toHaveBeenCalledTimes(4);
    expect(console.log).toHaveBeenCalledWith('Counting Up: START');
    expect(console.log).toHaveBeenCalledWith('Counting Up: STOP');
    expect(console.log).toHaveBeenCalledWith('Counting Down: START');
    expect(console.log).toHaveBeenCalledWith('Counting Down: STOP');
  });

  it('should throw exception when the limit is negative number', () => {
    expect(() => countUpDown(-2)).toThrow('Limit cannot be less than 0');
  });
});
