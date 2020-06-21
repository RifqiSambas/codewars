const cakes = (recipe, available) => {
  if (Object.keys(recipe).length > Object.keys(available).length) return 0;

  const quantity = [];

  for (const keyRecipe in recipe) {
    if (recipe.hasOwnProperty(keyRecipe)) {
      if (recipe[keyRecipe] === 0) {
        quantity.push(0);
        continue;
      }

      for (const keyAvailable in available) {
        if (available.hasOwnProperty(keyAvailable)) {
          if (keyRecipe === keyAvailable)
            quantity.push(
              Math.floor(available[kyAvailable] / recipe[keyRecipe])
            );
        }
      }
    }
  }

  return Math.min(...quantity);
};
