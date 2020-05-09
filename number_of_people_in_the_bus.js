const number = (busStops) => busStops.reduce((a, c) => a + c[0] - c[1], 0);
