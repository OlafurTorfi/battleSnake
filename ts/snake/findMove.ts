import { getDirections, getInitialPosition } from './getDirections'
import { IBoard, IPoint, IBody, IState, IMove } from './types'
import { evaluateLevel } from './evaluateLevel'
import { decideWhichMove } from './decideWhichMove'
import { evaluateMove } from './evaluateMove'

const greed = 1
function evaluateLevelLoop(
  level: IState[],
  numberOfIterations: number,
  levelsToEvaluate: number,
  valueEmptySquare: boolean = false,
) {
  if (numberOfIterations < levelsToEvaluate) {
    const proximityBias = (levelsToEvaluate - numberOfIterations) * (levelsToEvaluate - numberOfIterations)
    const foodValue = greed + proximityBias
    return evaluateLevelLoop(
      evaluateLevel(level, foodValue, valueEmptySquare),
      numberOfIterations + 1,
      levelsToEvaluate,
    )
  }
  return
}

export function findMove(body: IBody, levelsToEvaluate: number = 9, hasRandom: boolean = true): string {
  const board: IBoard = body.board
  const head: IPoint = body.you.body[0]
  const hasWeirdBody = !body.you.body[1] || (head.x === body.you.body[1].x && head.y === body.you.body[1].y)
  const lastMove = hasWeirdBody ? getInitialPosition(board, head) : { to: head, from: body.you.body[1] || head }
  // console.log('Debug lastMove: ', hasWeirdBody, lastMove, ', head: ', head, ', body: ', body.you.body[1])
  const directions = getDirections(lastMove.to, lastMove.from)
  const moveForward: IMove = { to: directions.forward, from: head }
  const moveLeft: IMove = { to: directions.left, from: head }
  const moveRight: IMove = { to: directions.right, from: head }
  console.log(
    'Debug moveForward: ',
    JSON.stringify(moveForward),
    ', moveLeft:',
    JSON.stringify(moveLeft),
    ', moveRight: ',
    JSON.stringify(moveRight),
  )
  const preStateForward: IState = { board, lastMove, mCount: { current: 0, decision: 'forward' } }
  const preStateLeft: IState = { board, lastMove, mCount: { current: 0, decision: 'left' } }
  const preStateRight: IState = { board, lastMove, mCount: { current: 0, decision: 'right' } }
  const proximityBias = Math.pow(levelsToEvaluate, 3)
  const foodValue = greed + proximityBias
  let stateForward = evaluateMove(preStateForward, moveForward, foodValue)
  let stateLeft = evaluateMove(preStateLeft, moveLeft, foodValue)
  let stateRight = evaluateMove(preStateRight, moveRight, foodValue)

  let firstLevel: IState[] = []
  if (stateForward) {
    firstLevel.push(stateForward)
  }
  if (stateLeft) {
    firstLevel.push(stateLeft)
  }
  if (stateRight) {
    firstLevel.push(stateRight)
  }
  evaluateLevelLoop(firstLevel, 1, levelsToEvaluate)
  // add some randomness to break out of cycles'
  const wormRandomnessPercentage = 40
  const randomForwardMultiplyer = 1 - Math.random() / wormRandomnessPercentage
  const randomLeftMultiplyer = 1 - Math.random() / wormRandomnessPercentage
  const randomRightMultiplyer = 1 - Math.random() / wormRandomnessPercentage
  const nextMove = decideWhichMove(
    stateForward,
    stateLeft,
    stateRight,
    randomForwardMultiplyer,
    randomLeftMultiplyer,
    randomRightMultiplyer,
  )
  if (nextMove === 'CannotFindApple') {
    console.log('Found no apple so evaluating move again with empty squares valued')
    stateForward = evaluateMove(preStateForward, moveForward, foodValue, true)
    stateLeft = evaluateMove(preStateLeft, moveLeft, foodValue, true)
    stateRight = evaluateMove(preStateRight, moveRight, foodValue, true)

    firstLevel = []
    if (stateForward) {
      firstLevel.push(stateForward)
    }
    if (stateLeft) {
      firstLevel.push(stateLeft)
    }
    if (stateRight) {
      firstLevel.push(stateRight)
    }
    evaluateLevelLoop(firstLevel, 1, levelsToEvaluate, true)
    return decideWhichMove(stateForward, stateLeft, stateRight)
  }
  return nextMove
}
