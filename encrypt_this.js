const encryptThis = (text) => {
  let r = text.split(" ");
  let res = [];

  for (let i in r)
    res.push(
      r[i].length == 1
        ? r[i].charCodeAt(0) + r[i].charAt(r[i].length)
        : r[i].length == 2
        ? r[i].charCodeAt(0) + r[i].charAt(r[i].length - 1)
        : r[i].charCodeAt(0) +
          r[i].charAt(r[i].length - 1) +
          r[i].slice(2, r[i].length - 1) +
          r[i].charAt(1)
    );

  return res.join(" ");
};
