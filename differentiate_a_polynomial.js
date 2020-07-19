const getMononomValue = (eq, x) => {
  let [k, power] = eq.split(/x\^?/);
  k = k === "-" ? -1 : k === "" ? 1 : +k;
  power = power === "" ? 1 : +power;
  return power * k * Math.pow(x, power - 1);
};

let differentiate = (e, p) =>
  e
    .match(/(-?\d*x(\^\d+)?)/g)
    .reduce((sum, mono) => sum + getMononomValue(mono, p), 0);

