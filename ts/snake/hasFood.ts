import { containsPoint } from './containsPoint'
import { IPoint, IBoard } from './types'

// this function is basically syntax sugar
export function hasFood(p: IPoint, board: IBoard) {
  return containsPoint(board.food, p)
}
