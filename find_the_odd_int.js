const findOdd = (A) => {
  let counts = {};
  let res = 0;
  A.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  for (i in counts) counts[i] % 2 != 0 ? (res = i) : 0;
  return parseInt(res, 10);
};
