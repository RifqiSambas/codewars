const solution = (str) => {
  return str
    .split(/([A-Z][A-Z])/gi)
    .filter(Boolean)
    .map((char) => (char.length % 2 === 0 ? char : `${char}_`));
};
