import { expect } from 'chai'
import { evaluateMove } from './evaluateMove'
import { mockBoard } from './mockData'
import { evaluateLevel } from './evaluateLevel'
describe('evaluateLevel test', () => {
  it('should be able to evaluate a queue with multiple states ', () => {
    const mCount = { current: 15 }
    const move1 = { to: { x: 15, y: 15 }, from: { x: 14, y: 15 } }
    const move2 = { to: { x: 1, y: 1 }, from: { x: 1, y: 2 } }
    const preState1 = { board: mockBoard, lastMove: move1, mCount }
    const preState2 = { board: mockBoard, lastMove: move1, mCount }
    const state1 = evaluateMove(preState1, move1)
    const state2 = evaluateMove(preState2, move2)
    if (!state1 || !state2) {
      throw new Error('one of the mock moves return undefined')
    }
    const newQueue = evaluateLevel([state1, state2])
    expect(mCount.current).to.eq(19)
    expect(newQueue).to.deep.eq([
      evaluateMove(state1, { to: { x: 2, y: 1 }, from: { x: 1, y: 1 } }),
      evaluateMove(state2, { to: { x: 15, y: 14 }, from: { x: 15, y: 15 } }),
    ])
  })
  it('should return a queue with all possible states rechable from input states ', () => {
    const mCount = { current: 15 }
    const move = { to: { x: 3, y: 3 }, from: { x: 3, y: 4 } }
    const preState = { board: mockBoard, lastMove: move, mCount }
    const state = evaluateMove(preState, move)
    if (!state) {
      throw new Error('Unable to make mock move!')
    }
    const newQueue = evaluateLevel([state])
    expect(mCount.current).to.eq(19)
    expect(newQueue.length).to.deep.eq(3)
  })
})
