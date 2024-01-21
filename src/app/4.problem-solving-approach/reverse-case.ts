const upperCaseCodes = new Set(Array.from(new Array(26)).map((_, i) => i + 65));

export const reverseCase = (str: string): string =>
  str
    .split('')
    .map(char =>
      upperCaseCodes.has(char.charCodeAt(0))
        ? char.toLowerCase()
        : char.toUpperCase()
    )
    .join('');
