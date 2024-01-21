export const sameSquared = (nums: number[], squaredNums: number[]): boolean => {
  if (nums.length !== squaredNums.length) {
    return false;
  }

  const numsRecord: Record<number, number> = nums.reduce(
    (record: Record<number, number>, num) => ({
      ...record,
      [num]: (record[num] ?? 0) + 1
    }),
    {}
  );

  const squaredRecord: Record<number, number> = squaredNums.reduce(
    (record: Record<number, number>, num) => ({
      ...record,
      [num]: (record[num] ?? 0) + 1
    }),
    {}
  );

  for (let key in numsRecord) {
    if (numsRecord[Number(key)] !== squaredRecord[Number(key) ** 2]) {
      return false;
    }
  }

  return true;
};
