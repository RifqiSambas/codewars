const deleteNth = (array, n) => {
  const repeated = {};

  return array.filter((number) => {
    repeated[number] = (repeated[number] || 0) + 1;
    const repetitions = repeated[number];

    return repetitions <= n;
  });
};
