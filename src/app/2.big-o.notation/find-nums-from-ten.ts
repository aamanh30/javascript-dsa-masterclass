export const findNumbersFromTen = (limit: number) => {
  if (limit < 0) {
    throw new Error('Limit cannot be less than 0');
  }

  const numbers = [];
  for (let i = 1; i <= Math.max(10, limit); i++) {
    numbers.push(i);
  }

  return numbers;
};
