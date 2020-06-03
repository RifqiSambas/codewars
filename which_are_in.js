const inArray = (array1, array2) => {
  return array1
    .filter((word1) => array2.some((word2) => word2.includes(word1)))
    .sort();
};
