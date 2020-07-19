const replacement = (a) => {
  a.sort((a, b) => a - b);
  a.pop() == 1 ? a.push(2) : a.unshift(1);
  return a;
};
