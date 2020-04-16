function rgb(r, g, b) {
  let array = [r, g, b];
  let result = "";

  for (i in array) {
    array[i] < 0
      ? (array[i] = 0)
      : array[i] > 255
      ? (array[i] = 255)
      : array[i];
    array[i] = array[i].toString(16).toUpperCase();
    array[i].length == 1 ? (array[i] = "0" + array[i]) : array[i];
    result += array[i];
  }

  return result;
}
