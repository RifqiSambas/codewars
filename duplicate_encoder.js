const duplicateEncode = (word) =>
  word
    .toLowerCase()
    .split("")
    .map((a) => (word.indexOf(a) === word.lastIndexOf(a) ? "(" : ")"))
    .join("");
