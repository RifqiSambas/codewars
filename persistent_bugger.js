let res = 0;
const persistence = (num) => {
  let n = num.toString().split("");
  if (n.length == 1) {
    let t = res;
    res = 0;
    return t;
  } else {
    res++;
    return persistence(n.reduce((a, b) => a * b));
  }
};
