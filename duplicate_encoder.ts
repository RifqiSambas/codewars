export function duplicateEncode(word: string) {
  return word
    .toLowerCase()
    .split("")
    .map((a) => (word.indexOf(a) === word.lastIndexOf(a) ? "(" : ")"))
    .join("");
}

