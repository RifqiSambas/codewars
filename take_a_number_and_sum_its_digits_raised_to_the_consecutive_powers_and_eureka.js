const sumDigPow = (a, b) => {
  const result = [];

  for (let i = a; i < b; i++) {
    const number = String(i)
      .split("")
      .reduce((total, value, index) => total + value ** (index + 1), 0);

    if (number === i) result.push(i);
  }

  return result;
};
