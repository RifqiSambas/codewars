function alphabetPosition(text) {
  text = text.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var text_murni = [];
  var hasil = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] == text[i].match(/[a-z]/i)) {
      text_murni += text[i];
    }
  }

  for (let i = 0; i < text_murni.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (text_murni[i] == alphabet[j]) {
        hasil += j + 1;
      }
    }
    if (i != text_murni.length - 1) {
      hasil += " ";
    }
  }

  return hasil.toString();
}
