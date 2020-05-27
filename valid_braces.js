const validBraces = (braces) => {
  let arr = [];

  for (let i = 0; i < braces.length; i++) {
    braces[i] === "{"
      ? arr.unshift("}")
      : braces[i] === "["
      ? arr.unshift("]")
      : braces[i] === "("
      ? arr.unshift(")")
      : braces[i] !== arr[0]
      ? false
      : arr.shift();
  }
  return arr.length === 0;
};
