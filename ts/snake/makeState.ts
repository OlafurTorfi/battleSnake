import { IBoard, IPoint, IState } from './types'
import { isWithinBoard } from './isWithinBoard'
import { isPartOfSnake } from './isPartOfSnake'
import { hasFood } from './hasFood'

export function makeState(board: IBoard, move: IPoint, myHead: IPoint, value: { current: number }): IState | undefined {
  if (!isWithinBoard(move, board) || isPartOfSnake(move, board)) {
    return undefined
  }
  if (hasFood(move, board)) {
    value.current = value.current + 3
  } else {
    value.current = value.current + 1
  }
  // Todo append move position to snake in board
  return { board, myHead: move }
}
