import { containsPoint } from './containsPoint'
import { IPoint, ISnake, IBoard } from './types'

export function isPartOfSnake(point: IPoint, board: IBoard) {
  return board.snakes.some(snake => {
    return containsPoint(snake.body, point)
  })
}
