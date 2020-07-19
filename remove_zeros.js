const removeZeros = (array) => {
  let kos = [];
  let res = [];
  let k = 0;
  let r = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0 || array[i] === "0") {
      kos[k] = array[i];
      k++;
    } else {
      res[r] = array[i];
      r++;
    }
  }

  for (let i = 0; i < k; i++) {
    res[res.length] = kos[i];
  }

  return res;
};

