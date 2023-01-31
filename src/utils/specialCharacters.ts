

export const replaceSpecialCharactersWithinString = (value: string): string => {
    return value.replace(/[^a-zA-Z 0-9 ]/g, '');
  };