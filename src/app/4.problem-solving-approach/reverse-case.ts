export const reverseCase = (str: string): string =>
  str
    .split('')
    .map(char => {
      const charCode = char.charCodeAt(0);
      return charCode >= 65 && charCode <= 90
        ? char.toLowerCase()
        : char.toUpperCase();
    })
    .join('');
