export const findCharacterCount = (str: string): Record<string, number> =>
  str.split('').reduce(
    (charCountRecord: Record<string, number>, currentChar) => ({
      ...charCountRecord,
      [currentChar]: (charCountRecord[currentChar] ?? 0) + 1
    }),
    {}
  );
