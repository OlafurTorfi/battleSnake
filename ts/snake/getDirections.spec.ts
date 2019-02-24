import { expect } from 'chai'
import { getDirections, getInitialPosition } from './getDirections'
import { mockBoardFactory } from './mockData'
describe('getDirections test', () => {
  const tests = [
    {
      result: { forward: { x: 8, y: 4 }, right: { x: 7, y: 3 }, left: { x: 9, y: 3 } },
      move: { x: 8, y: 3 },
      myHead: { x: 8, y: 2 },
    },
    {
      result: { forward: { x: 8, y: 3 }, right: { x: 9, y: 4 }, left: { x: 7, y: 4 } },
      move: { x: 8, y: 4 },
      myHead: { x: 8, y: 5 },
    },
    {
      result: { forward: { x: 15, y: 7 }, right: { x: 14, y: 8 }, left: { x: 14, y: 6 } },
      move: { x: 14, y: 7 },
      myHead: { x: 13, y: 7 },
    },
    {
      result: { forward: { x: 12, y: 7 }, right: { x: 13, y: 6 }, left: { x: 13, y: 8 } },
      move: { x: 13, y: 7 },
      myHead: { x: 14, y: 7 },
    },
  ]
  tests.forEach(test => {
    it(
      'should find if directions are ' +
        JSON.stringify(test.result) +
        ' after head of snake moves from ' +
        JSON.stringify(test.myHead) +
        ' to ' +
        JSON.stringify(test.move),
      () => {
        expect(getDirections(test.move, test.myHead)).to.deep.eq(test.result)
      },
    )
  })
})
describe('get initial direction test', () => {
  it('should assume it came from outside the board if it starts on the edge', () => {
    const atEdge = getInitialPosition(mockBoardFactory(), { x: 10, y: 0 })
    expect(atEdge.to).to.deep.eq({ x: 10, y: 0 })
    expect(atEdge.from).to.deep.eq({ x: 10, y: -1 })
  })
  it('should face food if it can', () => {
    const nextToFood = getInitialPosition(mockBoardFactory(), { x: 10, y: 3 })
    expect(nextToFood.to).to.deep.eq({ x: 10, y: 3 })
    expect(nextToFood.from).to.deep.eq({ x: 11, y: 3 })
  })

  it('should face away from any snake', () => {
    const nextToSnake = getInitialPosition(mockBoardFactory(), { x: 13, y: 6 })
    expect(nextToSnake.to).to.deep.eq({ x: 13, y: 6 })
    expect(nextToSnake.from).to.deep.eq({ x: 13, y: 7 })
  })
})
