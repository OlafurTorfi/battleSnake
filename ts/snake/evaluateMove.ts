import { IMove, IState } from './types'
import { isWithinBoard } from './isWithinBoard'
import { isPartOfSnake } from './isPartOfSnake'
import { moveSnake } from './modifyBoard'
import { hasFood } from './hasFood'
import { moveOnMap } from './moveOnMap'

export function evaluateMove(
  state: IState,
  move: IMove,
  foodValue: number = 3,
  valueEmptySquares: boolean = false,
): IState | undefined {
  if (!isWithinBoard(move.to, state.board) || isPartOfSnake(move.to, state.board)) {
    return undefined
  }
  if (hasFood(move.to, state.board)) {
    // console.log(
    //   `I found food at worth ${foodValue} going ${moveOnMap(move)} to ${JSON.stringify(move.to)} on the ${
    //     state.mCount.decision
    //   } trajectory`,
    // )
    state.mCount.current += foodValue
  } else if (valueEmptySquares) {
    state.mCount.current += 1
  }
  return { board: moveSnake(state.board, move), lastMove: move, mCount: state.mCount }
}
