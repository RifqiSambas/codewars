const list = (names) => {
  if (!names) return "";
  if (names.length === 2) return `${names[0].name} & ${names[1].name}`;

  return names
    .map(({ name }) => name)
    .join(", ")
    .replace(/,(?!.*,)/g, " &");
};
