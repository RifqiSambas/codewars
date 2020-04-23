const order = (words) => {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/[0-9]/) - b.match(/[0-9]/);
    })
    .join(" ");
};
