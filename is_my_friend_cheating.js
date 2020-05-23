const removeNb = (n) => {
  let hasil = [];
  for (let a = 1; a <= n; a++) {
    let b = ((n * (n + 1)) / 2 - a) / (a + 1);
    if (b % 1 === 0 && b <= n) hasil.push([a, b]);
  }
  return hasil;
};
