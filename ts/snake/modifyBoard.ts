import { IBoard, IPoint, IMove } from './types'
import { containsPoint } from './containsPoint'

export function moveSnake(board: IBoard, move: IMove) {
  board.snakes = board.snakes.map(snake => {
    if (containsPoint(snake.body, move.from)) {
      snake.body.pop()
      snake.body.unshift(move.to)
    }
    return snake
  })
  return board
}
