const uniqueInOrder = (iterable) => {
  typeof iterable === "string" ? (iterable = iterable.split("")) : "";
  return iterable.filter(
    (element, index, array) => element !== array[index + 1]
  );
};
