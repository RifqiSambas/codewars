let maxSequence = function (arr) {
  if (arr.filter((a) => a > -1).length < 0 || arr.length <= 0) {
    return 0;
  }
  let maxNum = 0,
    temp,
    len = arr.length;

  for (let l = 0, k = 1; l <= len; l++) {
    temp = arr.slice(l, l + k).reduce((a, b) => a + b, 0);
    if (temp > maxNum) {
      maxNum = temp;
    }
    if (l === len) {
      len -= 1;
      l = -1;
      k++;
    }
  }
  return maxNum;
};
