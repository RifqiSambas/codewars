const sum_pairs = (a, s) => {
  let mem = {};
  for (x of a)
    if (mem[s - x]) return [s - x, x];
    else mem[x] = 1;
};
