const comp = (array1, array2) => {
  if (!array1 || !array2) return false;

  const a1 = [...array1].sort((a, b) => a - b);
  const a2 = [...array2].sort((a, b) => a - b);
  const a1s = a1.map((number) => number ** 2);

  return JSON.stringify(a1s) === JSON.stringify(a2);
};
