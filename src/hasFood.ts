import { containsPoint } from './containsPoint';

export function hasFood(p, board) {
  return containsPoint(board.food, p);
}
