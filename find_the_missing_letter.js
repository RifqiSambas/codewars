const findMissingLetter = (array) => {
  array = array.map((a) => a.charCodeAt(0));
  for (let i = 0; i < array.length; i++) {
    if (array[i] + 1 != array[i + 1]) {
      return String.fromCharCode(array[i] + 1);
    }
  }
};
