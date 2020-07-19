const sumStrings = (a, b) => {
  let arrA = a
      .split("")
      .reverse()
      .map((a) => parseInt(a)),
    arrB = b
      .split("")
      .reverse()
      .map((b) => parseInt(b));
  let maxLength = Math.max(a.length, b.length),
    carry = 0,
    num = "";

  for (var i = 0; i < maxLength; i++) {
    isNaN(arrA[i]) ? arrA.push(0) : "";
    isNaN(arrB[i]) ? arrB.push(0) : "";

    if (arrA[i] + arrB[i] + carry > 9) {
      num += ((arrA[i] + arrB[i] + carry) % 10).toString();
      carry = 1;
      if (i === maxLength - 1 && carry === 1) num += "1";
    } else {
      num += ((arrA[i] + arrB[i] + carry) % 10).toString();
      carry = 0;
    }
  }
  return num.split("").reverse().join("").replace(/\b0+/g, "");
};

