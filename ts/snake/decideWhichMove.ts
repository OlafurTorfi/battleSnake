import { IState } from './types'
import { moveOnMap } from './moveOnMap'
export function foundNoApple(state?: IState) {
  if (!state || state.mCount.current === 0) {
    return true
  }
  return false
}
export function decideWhichMove(
  forwardState?: IState,
  leftState?: IState,
  rightState?: IState,
  forwardRandom: number = 1,
  leftRandom: number = 1,
  rightRandom: number = 1,
) {
  if (foundNoApple(forwardState) && foundNoApple(rightState) && foundNoApple(leftState)) {
    return 'CannotFindApple'
  }
  if (
    forwardState &&
    (!rightState || forwardState.mCount.current * forwardRandom > rightState.mCount.current * rightRandom) &&
    (!leftState || forwardState.mCount.current * forwardRandom > leftState.mCount.current * leftRandom)
  ) {
    return moveOnMap(forwardState.lastMove)
  }
  if (leftState && (!rightState || leftState.mCount.current * leftRandom > rightState.mCount.current * rightRandom)) {
    return moveOnMap(leftState.lastMove)
  }
  if (rightState) {
    return moveOnMap(rightState.lastMove)
  }
  console.log('Waz will blindly go upwards to his death')
  return 'up'
}
