import { moveSnake } from './modifyBoard'
import { expect } from 'chai'
import { mockBoardFactory } from './mockData'
import { IMove } from './types'

describe('modifyBoard test', () => {
  it('should pop from snake body who contains move and push new move to it', () => {
    const board = mockBoardFactory()
    const move: IMove = { to: { x: 8, y: 2 }, from: { x: 8, y: 3 } }
    const newBoard = moveSnake(board, move)
    expect(newBoard.snakes[0].body[0]).to.deep.eq({ x: 8, y: 2 })
    expect(newBoard.snakes[0].body.length).to.eq(2)
    expect(newBoard.snakes[1]).to.deep.eq(board.snakes[1])
  })
  it('should return a new board instead of a mutated input board', () => {
    const board = mockBoardFactory()
    moveSnake(board, { to: { x: 8, y: 2 }, from: { x: 8, y: 3 } })
    expect(board).to.deep.eq(mockBoardFactory())
  })
  it('should remove food if snakes move onto food square without mutating the old', () => {
    const board = mockBoardFactory()
    board.food = [{ x: 8, y: 2 }]
    const newBoard = moveSnake(board, { to: { x: 8, y: 2 }, from: { x: 8, y: 3 } })
    expect(newBoard.food.length).to.eq(0)
    expect(board.food.length).to.eq(1)
  })
})
