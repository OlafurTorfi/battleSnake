import { evaluateMove } from './evaluateMove'
import { IState } from './types'
import { getDirections } from './getDirections'

export function evaluateLevel(queueIn: IState[], foodValue: number = 3) {
  const nextLevelQueue: IState[] = []
  while (queueIn.length > 0) {
    const state = queueIn.pop()
    if (!state) {
      throw new Error('No move found in queue!')
    }
    const directions = getDirections(state.lastMove.to, state.lastMove.from)

    const forward = evaluateMove(state, { to: directions.forward, from: state.lastMove.to }, foodValue)
    const right = evaluateMove(state, { to: directions.right, from: state.lastMove.to }, foodValue)
    const left = evaluateMove(state, { to: directions.left, from: state.lastMove.to }, foodValue)
    if (forward) {
      nextLevelQueue.push(forward)
    }
    if (right) {
      nextLevelQueue.push(right)
    }
    if (left) {
      nextLevelQueue.push(left)
    }
  }
  return nextLevelQueue
}
