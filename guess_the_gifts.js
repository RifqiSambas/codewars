const guessGifts = (wishlist, presents) => {
  return wishlist
    .filter((x) => {
      return presents.some((y) => {
        return (
          x.size == y.size && x.clatters == y.clatters && x.weight == y.weight
        );
      });
    })
    .map((x) => {
      return x.name;
    });
};
