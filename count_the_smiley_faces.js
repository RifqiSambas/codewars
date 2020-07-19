const countSmileys = (arr) =>
  arr.filter((i) => /[:|;][\-|\~]?[)|D]/.test(i)).length;
