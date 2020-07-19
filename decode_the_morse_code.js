const decodeMorse = (morseCode) =>
  morseCode
    .trim()
    .split(" ")
    .map((a) => MORSE_CODE[a] || " ")
    .join("")
    .replace(/\s+/g, " ");
