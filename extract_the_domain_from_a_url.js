const domainName = (url) => {
  return url
    .split(/https:|http:|www./)
    .join("")
    .split("//")
    .join("")
    .split(".")[0];
};
