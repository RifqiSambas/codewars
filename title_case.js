const titleCase = (title, minorWords) => {
  let array = title
    .toLowerCase()
    .split(" ")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1));

  if (minorWords !== undefined) {
    for (let i in array) {
      for (let j in minorWords.split(" "))
        if (array[i].toLowerCase() == minorWords.split(" ")[j].toLowerCase())
          array[i] = array[i].charAt(0).toLowerCase() + array[i].slice(1);
    }
  }

  return array[0].charAt(0).toUpperCase() + array.join(" ").slice(1);
};

