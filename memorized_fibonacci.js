const fibonacci = (n) =>
  Array(n)
    .fill()
    .reduce(([a, b]) => [b, a + b], [0, 1])[0];
