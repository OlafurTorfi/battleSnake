import { mockBoardFactory } from './mockData'
import { decideWhichMove, foundNoApple } from './decideWhichMove'
import { expect } from 'chai'

describe('decide which move function', () => {
  const mForward = { to: { x: 2, y: 3 }, from: { x: 3, y: 3 } }
  const mRight = { to: { x: 3, y: 2 }, from: { x: 3, y: 3 } }
  const mLeft = { to: { x: 3, y: 4 }, from: { x: 3, y: 3 } }
  const board = mockBoardFactory()
  const tests = [
    {
      forward: { board, mCount: { current: 3 }, lastMove: mForward },
      right: { board, mCount: { current: 2 }, lastMove: mRight },
      left: { board, mCount: { current: 1 }, lastMove: mLeft },
      result: 'left',
    },
    {
      forward: { board, mCount: { current: 1 }, lastMove: mForward },
      right: { board, mCount: { current: 3 }, lastMove: mRight },
      left: { board, mCount: { current: 2 }, lastMove: mLeft },
      result: 'up',
    },
    {
      forward: { board, mCount: { current: 2 }, lastMove: mForward },
      right: { board, mCount: { current: 1 }, lastMove: mRight },
      left: { board, mCount: { current: 3 }, lastMove: mLeft },
      result: 'down',
    },
    {
      forward: undefined,
      right: { board, mCount: { current: 3 }, lastMove: mRight },
      left: { board, mCount: { current: 2 }, lastMove: mLeft },
      result: 'up',
    },
  ]
  tests.forEach((test, i) => {
    it('should run move decision test ' + i, () => {
      expect(decideWhichMove(test.forward, test.left, test.right)).to.deep.eq(test.result)
    })
  })
  it('should be able have some randomness', () => {
    const forward = undefined
    const right = { board, mCount: { current: 3 }, lastMove: mRight }
    const left = { board, mCount: { current: 2 }, lastMove: mLeft }
    const forwardRandom = 0.5
    const rightRandom = 0.5
    const leftRandom = 1
    expect(decideWhichMove(forward, left, right, forwardRandom, leftRandom, rightRandom)).to.eq('down')
  })
  it('should tell you when it cannot find any apples', () => {
    const forward = undefined
    const right = { board, mCount: { current: 0 }, lastMove: mRight }
    const left = { board, mCount: { current: 0 }, lastMove: mLeft }
    expect(decideWhichMove(forward, left, right)).to.eq('CannotFindApple')
  })
  // it.only('should use random number if all other are equal', () => {
  //   const forward = { board, mCount: { current: 1 }, lastMove: mForward }
  //   const right = { board, mCount: { current: 1 }, lastMove: mRight }
  //   const left = { board, mCount: { current: 1 }, lastMove: mLeft }
  //   const forwardRandom = 0.5
  //   const rightRandom = 0.5
  //   const leftRandom = 1
  //   expect(decideWhichMove(forward, left, right, forwardRandom, leftRandom, rightRandom)).to.eq('down')
  // })
})
describe('has no apples test', () => {
  it('should return true when state is undefined', () => {
    expect(foundNoApple(undefined)).to.eq(true)
    expect(
      foundNoApple({
        board: mockBoardFactory(),
        mCount: { current: 0 },
        lastMove: { to: { x: 3, y: 2 }, from: { x: 3, y: 3 } },
      }),
    ).to.eq(true)
    expect(
      foundNoApple({
        board: mockBoardFactory(),
        mCount: { current: 1 },
        lastMove: { to: { x: 3, y: 2 }, from: { x: 3, y: 3 } },
      }),
    ).to.eq(false)
  })
})
