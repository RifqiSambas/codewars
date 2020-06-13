const high = (x) => {
  x = x.split(" ");
  let [max, word] = [0, ""];
  for (let i = 0; i < x.length; i++) {
    let temp = x[i].length
      ? x[i]
          .split("")
          .map((a) => a.charCodeAt(0) - 96)
          .reduce((a, b) => a + b)
      : x[i].charCodeAt(0);
    if (temp > max) [word, max] = [x[i], temp];
  }
  return word;
};
