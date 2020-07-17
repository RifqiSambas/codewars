const parseMolecule = (s) => {
  var o = {};
  while (
    s !=
    (s = s.replace(/[\[\(\{]([a-z0-9]+)[\]\)\}]([0-9]+)/gi, (f, e, n) =>
      repeat(e, n)
    ))
  );
  s.replace(
    /([A-Z][a-z]?)([0-9]+)?/g,
    (f, e, n) => (o[e] = (o[e] || 0) + +(n || 1))
  );
  return o;
};

const repeat = (s, n) => {
  for (var r = ""; n--; r += s);
  return r;
};
