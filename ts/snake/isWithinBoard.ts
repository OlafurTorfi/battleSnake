import { IPoint, IBoard } from './types'

export function isWithinBoard(p: IPoint, board: IBoard) {
  return p.x > 0 && p.y > 0 && p.x <= board.width && p.y <= board.height
}
