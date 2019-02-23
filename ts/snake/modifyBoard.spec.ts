import { moveSnake } from './modifyBoard'
import { expect } from 'chai'
import { mockBoard } from './mockData'
import { IMove } from './types'

describe('modifyBoard test', () => {
  it('should pop from snake body who contains move and push new move to it', () => {
    const move: IMove = { to: { x: 8, y: 2 }, from: { x: 8, y: 3 } }
    const newBoard = moveSnake(mockBoard, move)
    expect(newBoard.snakes[0].body[0]).to.deep.eq({ x: 8, y: 2 })
    expect(newBoard.snakes[0].body.length).to.eq(2)
    expect(newBoard.snakes[1]).to.deep.eq(mockBoard.snakes[1])
  })
})
