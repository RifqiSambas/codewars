const nbYear = (p0, percent, aug, p) => {
  let y = 0;
  for (y; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
  return y;
};

