import { IPoint, IBoard, IMove } from './types'
import { isWithinBoard } from './isWithinBoard'
import { hasFood } from './hasFood'
import { isPartOfSnake } from './isPartOfSnake'

export function getDirections(head: IPoint, neck: IPoint) {
  const deltaX = head.x - neck.x
  const deltaY = head.y - neck.y
  const forward = { x: head.x + deltaX, y: head.y + deltaY }
  const right = { x: head.x - deltaY, y: head.y + deltaX }
  const left = { x: head.x + deltaY, y: head.y - deltaX }
  return { forward, left, right }
}
export function getInitialPosition(board: IBoard, position: IPoint): IMove {
  const up: IPoint = { x: position.x, y: position.y - 1 }
  const down: IPoint = { x: position.x, y: position.y + 1 }
  const right: IPoint = { x: position.x + 1, y: position.y }
  const left: IPoint = { x: position.x - 1, y: position.y }
  function hasDecentLastMoveAssumption(lastPoint: IPoint) {
    if (!isWithinBoard(lastPoint, board) || isPartOfSnake(lastPoint, board)) {
      return { to: position, from: lastPoint }
    }
    if (hasFood(lastPoint, board)) {
      return {
        to: position,
        from: { x: position.x + (position.x - lastPoint.x), y: position.y + (position.y - lastPoint.y) },
      }
    }
    return false
  }
  return (
    hasDecentLastMoveAssumption(up) ||
    hasDecentLastMoveAssumption(down) ||
    hasDecentLastMoveAssumption(right) ||
    hasDecentLastMoveAssumption(left) || { to: position, from: down }
  )
}
