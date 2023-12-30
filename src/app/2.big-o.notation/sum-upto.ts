export const sumUpto = (limit: number) => {
  if (limit < 0) {
    throw new Error('Limit cannot be less than 0');
  }
  return (limit * (limit + 1)) / 2;
};
