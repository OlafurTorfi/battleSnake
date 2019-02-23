import { expect } from 'chai'
import { getDirections } from './getDirections'
import { mockBoard } from './mockData'
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
