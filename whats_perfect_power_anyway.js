const isPP = (n) => {
  let current = 2;
  let power = 2;
  const max = Math.floor(n / 2);
  while (current <= max) {
    power = 2;

    while (current ** power <= n) {
      if (n === current ** power) {
        return [current, power];
      }
      power++;
    }
    current++;
  }
  return null;
};
