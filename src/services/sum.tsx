export const sum = (num: number): number => {
  return num + 1;
};

export const multiply = (num: number, multipler: number): number | string => {
  if (multipler === 2 || multipler === 3) {
    return num * multipler;
  }
  return "Multiplier not accepted";
};
