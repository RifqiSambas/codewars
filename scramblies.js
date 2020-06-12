const scramble = (string1, string2) => {
  const array1 = string1.split("").sort();
  const array2 = string2.split("").sort();
  let i = 0;
  let x;

  for (x = 0, i = 0; i < array2.length && x <= array1.length; x++)
    if (array2[i] === array1[x]) i++;

  return x <= array1.length;
};
