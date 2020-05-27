const createPhoneNumber = (numbers) => {
  const ns = numbers.join("");
  const st = ns.slice(0, 3);
  const nd = ns.slice(3, 6);
  const th = ns.slice(6, 10);

  return `(${st}) ${nd}-${th}`;
};
