import { containsPoint } from './containsPoint'
import { IPoint, IBoard } from './types'

export function hasFood(p: IPoint, board: IBoard) {
  return containsPoint(board.food, p)
}
