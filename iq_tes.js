const iqTest = (numbers) => {
  const numberArray = numbers.split(" ").map((number) => Number(number));
  const even = numberArray.filter((number) => number % 2 === 0);
  const odd = numberArray.filter((number) => number % 2 !== 0);

  return odd.length < even.length
    ? numberArray.indexOf(odd[0]) + 1
    : numberArray.indexOf(even[0]) + 1;
};
