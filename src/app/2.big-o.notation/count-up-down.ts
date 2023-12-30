export const countUpDown = (limit: number) => {
  if (limit < 0) {
    throw new Error('Limit cannot be less than 0');
  }

  console.log('Counting Up: START');
  for (let i = 1; i <= limit; i++) {
    console.log(i);
  }
  console.log('Counting Up: STOP');

  console.log('Counting Down: START');
  for (let i = limit; i >= 1; i--) {
    console.log(i);
  }
  console.log('Counting Down: STOP');
};
