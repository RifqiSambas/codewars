const bouncingBall = function (h, bounce, window) {
  let seen = -1;
  if (bounce > 0 && bounce < 1) {
    while (h > window) {
      h *= bounce;
      seen += 2;
    }
  }
  return seen;
};
