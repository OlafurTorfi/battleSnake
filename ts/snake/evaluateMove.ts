import { IMove, IState } from './types'
import { isWithinBoard } from './isWithinBoard'
import { isPartOfSnake } from './isPartOfSnake'
import { moveSnake } from './modifyBoard'
import { hasFood } from './hasFood'

export function evaluateMove(state: IState, move: IMove): IState | undefined {
  if (!isWithinBoard(move.to, state.board) || isPartOfSnake(move.to, state.board)) {
    return undefined
  }
  if (hasFood(move.to, state.board)) {
    state.mCount.current += 3
  } else {
    state.mCount.current += 1
  }
  return { board: moveSnake(state.board, move), lastMove: move, mCount: state.mCount }
}
