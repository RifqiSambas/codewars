Math.round = (number) => parseInt(number.toFixed(0));

Math.ceil = (number) =>
  number % 1 === 0 ? parseInt(number) : parseInt(number + 1);

Math.floor = (number) => parseInt(number);

