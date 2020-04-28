const incrementOne = (str) => {
  let lead = str.replace(/[1-9]+[0-9]*$/, "").length;
  let trail = str.replace(/^[0]+/g, "");
  if (lead === str.length) return str.substr(0, lead - 1) + 1;
  if (String(+trail + 1).length > trail.length)
    return str.substr(0, lead - 1) + (+trail + 1);
  return str.substr(0, lead) + (+trail + 1);
};

const incrementString = (str) => {
  if (!/[\d]+/.test(str)) return str + "1";
  return str.replace(/[\d]+/, incrementOne);
};

