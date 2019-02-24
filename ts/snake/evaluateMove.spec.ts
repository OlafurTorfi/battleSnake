import { expect } from 'chai'
import { evaluateMove } from './evaluateMove'
import { mockBoardFactory } from './mockData'
describe('evaluate move test', () => {
  it('should make position', () => {
    const move = { to: { x: 8, y: 2 }, from: { x: 8, y: 3 } }
    const mockState = { board: mockBoardFactory(), lastMove: move, mCount: { current: 0 } }
    const newState = evaluateMove(mockState, move)
    expect(newState && newState.lastMove).to.deep.eq(move)
  })
  it('should return undefined if move is out of board', () => {
    const move = { to: { x: -1, y: 4 }, from: { x: 0, y: 4 } }
    const mockState = { board: mockBoardFactory(), lastMove: move, mCount: { current: 0 } }
    expect(evaluateMove(mockState, move)).to.eq(undefined)
  })
  it('should return undefined if move is into another snake', () => {
    const move = { to: { x: 14, y: 7 }, from: { x: 14, y: 6 } }
    const mockState = { board: mockBoardFactory(), lastMove: move, mCount: { current: 0 } }
    expect(evaluateMove(mockState, move)).to.eq(undefined)
  })
  it('should increment value if move is available and empty squares are valued', () => {
    const value = { current: 0 }
    const move = { to: { x: 6, y: 4 }, from: { x: 5, y: 4 } }
    const mockState = { board: mockBoardFactory(), lastMove: move, mCount: value }
    evaluateMove(mockState, move, 0, true)
    expect(value.current).to.eq(1)
  })
  it('should increment value by three if there is food', () => {
    const value = { current: 0 }
    const move = { to: { x: 9, y: 3 }, from: { x: 9, y: 4 } }
    const mockState = { board: mockBoardFactory(), lastMove: move, mCount: value }
    evaluateMove(mockState, move)
    expect(value.current).to.eq(3)
  })
  it('new state should not have clone of board but a new one', () => {
    const value = { current: 0 }
    const move = { to: { x: 8, y: 2 }, from: { x: 8, y: 3 } }
    const boardPreMove = mockBoardFactory()
    const newState = evaluateMove({ board: boardPreMove, lastMove: move, mCount: value }, move)
    if (!newState) {
      throw new Error('evaluating move did not return a state')
    }
    expect(newState.board.snakes[0].body[0]).to.deep.eq(move.to)
    expect(boardPreMove).to.deep.eq(mockBoardFactory())
  })
})
