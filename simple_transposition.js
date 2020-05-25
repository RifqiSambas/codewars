const simpleTransposition = (t) =>
  t.replace(/./g, (a, i) => (i % 2 ? "" : a)) +
  t.replace(/./g, (a, i) => (!(i % 2) ? "" : a));
