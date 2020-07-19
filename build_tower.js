const towerBuild = (n) =>
  [...Array(n)].map(
    (_, i) =>
      " ".repeat(n - i - 1) + "*".repeat(i * 2 + 1) + " ".repeat(n - i - 1)
  );
