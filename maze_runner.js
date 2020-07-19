const mazeRunner(maze, directions) => {
  let cursor;
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) {
        cursor = [i, j];
        break;
      }
    }
  }
  let [y, x] = cursor;
  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === "N") {
      y -= 1;
    }
    if (directions[i] === "S") {
      y += 1;
    }
    if (directions[i] === "E") {
      x += 1;
    }
    if (directions[i] === "W") {
      x -= 1;
    }
    if (maze[y] === undefined || maze[y][x] === undefined) {
      return "Dead";
    }
    if (maze[y][x] === 0) {
      continue;
    }
    if (maze[y][x] === 1) {
      return "Dead";
    }
    if (maze[y][x] === 3) {
      return "Finish";
    }
  }
  return "Lost";
}

