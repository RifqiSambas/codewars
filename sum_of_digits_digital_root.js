const digital_root = (num) => {
  while (num > 9)
    num = String(num)
      .split("")
      .reduce((a, b) => +a + +b);
  return num;
};
