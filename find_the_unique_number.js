const findUniq = (array) =>
  array.find((number) => array.indexOf(number) === array.lastIndexOf(number));
