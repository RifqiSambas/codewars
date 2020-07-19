class RomanNumerals {
  static toRoman(val) {
    let lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let roman = "";
    let i;
    for (i in lookup) {
      while (val >= lookup[i]) {
        roman += i;
        val -= lookup[i];
      }
    }
    return roman;
  }

  static fromRoman(val) {
    let result = 0;
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];

    for (let i = 0; i < decimal.length; i++) {
      while (val.indexOf(roman[i]) == 0) {
        result += decimal[i];
        val = val.substring(roman[i].length);
      }
    }
    return result;
  }
}
