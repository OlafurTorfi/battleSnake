export function isEmpty(p, board) {
  return !board.snakes.some(snake => {
    return snake.body.some(point => {
      return point.x === p.x && point.y === p.y;
    });
  });
}
