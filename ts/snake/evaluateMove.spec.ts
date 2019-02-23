import { expect } from 'chai'
import { evaluateMove } from './evaluateMove'
import { mockBoard } from './mockData'
describe('make state test', () => {
  it('should make position', () => {
    const move = { to: { x: 8, y: 2 }, from: { x: 8, y: 3 } }
    const mockState = { board: mockBoard, lastMove: move, mCount: { current: 0 } }
    const newState = evaluateMove(mockState, move)
    expect(newState && newState.lastMove).to.deep.eq(move)
  })
  it('should return undefined if move is out of board', () => {
    const move = { to: { x: 0, y: 4 }, from: { x: 1, y: 4 } }
    const mockState = { board: mockBoard, lastMove: move, mCount: { current: 0 } }
    expect(evaluateMove(mockState, move)).to.eq(undefined)
  })
  it('should return undefined if move is into another snake', () => {
    const move = { to: { x: 14, y: 7 }, from: { x: 14, y: 6 } }
    const mockState = { board: mockBoard, lastMove: move, mCount: { current: 0 } }
    expect(evaluateMove(mockState, move)).to.eq(undefined)
  })
  it('should increment value if move is available', () => {
    const value = { current: 0 }
    const move = { to: { x: 6, y: 4 }, from: { x: 5, y: 4 } }
    const mockState = { board: mockBoard, lastMove: move, mCount: value }
    evaluateMove(mockState, move)
    expect(value.current).to.eq(1)
  })
  it('should increment value by three if there is food', () => {
    const value = { current: 0 }
    const move = { to: { x: 9, y: 3 }, from: { x: 9, y: 4 } }
    const mockState = { board: mockBoard, lastMove: move, mCount: value }
    evaluateMove(mockState, move)
    expect(value.current).to.eq(3)
  })
})
