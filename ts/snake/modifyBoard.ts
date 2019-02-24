import { IBoard, IMove } from './types'
import { containsPoint } from './containsPoint'
import { stringify } from 'querystring'

export function moveSnake(board: IBoard, move: IMove) {
  const newSnakePositions = board.snakes.map(snake => {
    if (containsPoint(snake.body, move.from)) {
      const newSnakeBody = snake.body.slice(0, snake.body.length - 1)
      const newSnake = { id: snake.id, name: snake.name, health: snake.health, body: [move.to, ...newSnakeBody] }
      return newSnake
    }
    return snake
  })
  const newBoard = {
    food: board.food.filter(f => f.x !== move.to.x || f.y !== move.to.y),
    height: board.height,
    width: board.width,
    snakes: newSnakePositions,
  }
  return newBoard
}
