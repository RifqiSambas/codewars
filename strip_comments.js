const solution = (str, arr) => {
  str = str.split("\n");
  for (let i = 0; i < str.length; i++) {
    let shorter;
    for (let j = 0; j < arr.length; j++) {
      let idx = str[i].indexOf(arr[j]);
      if (idx > -1) shorter = idx < shorter || !shorter ? idx : shorter;
    }
    if (shorter) str[i] = str[i].substr(0, shorter).trim();
  }
  return str.join("\n");
};

