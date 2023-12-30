export const findPairs = (limit: number): number[][] => {
  if (limit < 0) {
    throw new Error('Limit cannot be less than 0');
  }

  const pairs = [];
  for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
      pairs.push([i, j]);
    }
  }

  return pairs;
};
