const sortArray = (array) => {
  let odd = [];
  for (let i in array) array[i] % 2 != 0 ? odd.push(array[i]) : "";
  odd.sort(function (a, b) {
    return a - b;
  });

  for (let i in array) {
    if (array[i] % 2 != 0) {
      array[i] = odd[0];
      odd.shift();
    }
  }

  return array;
};
