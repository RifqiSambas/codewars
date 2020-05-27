const digPow = (n, p) => {
  const summation = String(n)
    .split("")
    .map((char) => Number(char))
    .reduce((a, b) => {
      const result = a + b ** p;
      p++;
      return result;
    }, 0);

  const k = summation / n;

  return Number.isInteger(k) ? k : -1;
};
