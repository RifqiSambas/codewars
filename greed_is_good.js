const score = (dice) => {
  let dc = [0, 0, 0, 0, 0, 0];
  let tdr = [1000, 200, 300, 400, 500, 600];
  let sdr = [100, 0, 0, 0, 50, 0];
  dice.forEach((x) => {
    dc[x - 1]++;
  });
  return dc.reduce((s, x, i) => {
    return s + (x >= 3 ? tdr[i] : 0) + sdr[i] * (x % 3);
  }, 0);
};
