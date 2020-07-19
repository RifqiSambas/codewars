const tickets = (peopleInLine) => {
  const till = {
    amount25: 0,
    amount50: 0,
    amount100: 0,
  };

  for (const money of peopleInLine) {
    switch (money) {
      case 100:
        if (till.amount25 >= 1 && till.amount50 >= 1) {
          till.amount25--;
          till.amount50--;
          till.amount100++;
        } else if (till.amount25 >= 3) {
          till.amount25 -= 3;
          till.amount100++;
        } else {
          return "NO";
        }

        break;

      case 50:
        if (till.amount25 >= 1) {
          till.amount25--;
          till.amount50++;
        } else {
          return "NO";
        }

        break;

      case 25:
        till.amount25++;
        break;

      default:
        break;
    }
  }

  return "YES";
};
