var countBits = function(n) {
  // Program Me
  var count = 0;
  var num = "";

  num = (n >>> 0).toString(2);

  for (let i = 0; i < num.length; i++) {
    if (num[i] == 1) {
      count++;
    }
  }

  return count;
};
