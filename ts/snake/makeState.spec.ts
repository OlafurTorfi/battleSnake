import { expect } from 'chai'
import { makeState } from './makeState'
import { mockBoard } from './mockData'
describe('make state test', () => {
  it('should make position', () => {
    const forward = { x: 8, y: 2 }
    const myHead = { x: 8, y: 3 }
    const newState = makeState(mockBoard, forward, myHead, { current: 0 })
    expect(newState && newState.myHead).to.eq(forward)
  })
  it('should return undefined if move is out of board', () => {
    expect(makeState(mockBoard, { x: 0, y: 4 }, { x: 1, y: 4 }, { current: 0 })).to.eq(undefined)
  })
  it('should return undefined if move is into another snake', () => {
    expect(makeState(mockBoard, { x: 14, y: 7 }, { x: 14, y: 6 }, { current: 0 })).to.eq(undefined)
  })
  it('should increment value if move is available', () => {
    const value = { current: 0 }
    makeState(mockBoard, { x: 6, y: 4 }, { x: 5, y: 4 }, value)
    expect(value.current).to.eq(1)
  })
  it('should increment value by three if there is food', () => {
    const value = { current: 0 }
    makeState(mockBoard, { x: 9, y: 3 }, { x: 9, y: 4 }, value)
    expect(value.current).to.eq(3)
  })
  it('should include the next possible moves of the snake', () => {
    const newState = makeState(mockBoard, { x: 9, y: 3 }, { x: 9, y: 4 }, { current: 0 })
    if (!newState || !newState.forward || !newState.right || !newState.left) {
      throw new Error('no state generated, or state incomplete! State was:' + JSON.stringify(newState))
    }
    expect(newState.forward.myHead).to.eq({ x: 9, y: 2 })
    expect(newState.right.myHead).to.eq({ x: 10, y: 3 })
    expect(newState.left.myHead).to.eq({ x: 8, y: 3 })
  })
})
