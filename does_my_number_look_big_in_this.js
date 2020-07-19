const narcissistic = (value) => {
  if (!Number.isInteger(value)) return `${value} is not an integer`;

  const numberDestructured = [...value.toString()].map((number) =>
    Number(number)
  );
  const result = numberDestructured.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue ** numberDestructured.length,
    0
  );

  return value === result;
};
