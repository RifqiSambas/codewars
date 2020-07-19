const generateHashtag = (str) => {
  str = str.replace(/\s\s+/g, " ");
  if (!str || str == " " || str.length >= 140) return false;
  else {
    return (
      "#" +
      str
        .split(" ")
        .map((str) => {
          return str.charAt(0).toUpperCase() + str.slice(1);
        })
        .join("")
    );
  }
};
