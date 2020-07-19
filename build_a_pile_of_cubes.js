const findNb = (n) => {
  let sum = 0;
  let idx = 1;

  while (sum < n) {
    sum += Math.pow(idx, 3);
    idx += 1;
  }

  return sum === n ? idx - 1 : -1;
};
