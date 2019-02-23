import { getDirections } from './getDirections'
import { IBoard, IPoint, IBody, IState, IMove } from './types'
import { moveSnake } from './modifyBoard'
import { evaluateLevel } from './evaluateLevel'
import { moveOnMap } from './moveOnMap'
import { evaluateMove } from './evaluateMove'

const levelsToEvaluate = 10

function evaluateLevelLoop(level: IState[], numberOfIterations: number) {
  if (numberOfIterations >= levelsToEvaluate) {
    return
  }
  evaluateLevelLoop(evaluateLevel(level), numberOfIterations + 1)
  return
}

export function findMove(body: IBody): string {
  const board: IBoard = body.board
  const head: IPoint = body.you.body[0]
  const lastMove = { to: head, from: body.you.body[1] || head }
  const directions = getDirections(lastMove.to, lastMove.from)
  const mForwardCount = { current: 0 }
  const mRightCount = { current: 0 }
  const mLeftCount = { current: 0 }
  const moveForward: IMove = { to: directions.forward, from: head }
  const moveLeft: IMove = { to: directions.left, from: head }
  const moveRight: IMove = { to: directions.right, from: head }
  const preStateForward: IState = { board, lastMove, mCount: mForwardCount }
  const preStateLeft: IState = { board, lastMove, mCount: mLeftCount }
  const preStateRight: IState = { board, lastMove, mCount: mRightCount }
  // const forward: IState = { board: moveSnake(board, moveForward), lastMove: moveForward, mCount: mForwardCount }
  // const left: IState = { board: moveSnake(board, moveLeft), lastMove: moveLeft, mCount: mLeftCount }
  // const right: IState = { board: moveSnake(board, moveRight), lastMove: moveRight, mCount: mRightCount }
  const stateForward = evaluateMove(preStateForward, moveForward)
  const stateLeft = evaluateMove(preStateLeft, moveLeft)
  const stateRight = evaluateMove(preStateRight, moveRight)
  const firstLevel: IState[] = []
  if (stateForward) {
    firstLevel.push(stateForward)
  }
  if (stateLeft) {
    firstLevel.push(stateLeft)
  }
  if (stateRight) {
    firstLevel.push(stateRight)
  }
  evaluateLevelLoop(firstLevel, 1)
  console.log(
    'Debug mForwardCount, mRightCount, mLeftCount: ',
    mForwardCount.current,
    mRightCount.current,
    mLeftCount.current,
  )
  if (stateForward && mForwardCount.current > mRightCount.current && mForwardCount.current > mLeftCount.current) {
    return moveOnMap({ to: directions.forward, from: head })
  }
  if (stateLeft && mLeftCount.current > mRightCount.current) {
    return moveOnMap({ to: directions.left, from: head })
  } else {
    return moveOnMap({ to: directions.right, from: head })
  }
}
