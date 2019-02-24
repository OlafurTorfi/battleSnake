import { expect } from 'chai'
import { isWithinBoard } from './isWithinBoard'
import { mockBoardFactory } from './mockData'
describe('is Within Board test', () => {
  const tests = [
    { result: false, point: { x: 0, y: 15 } },
    { result: false, point: { x: 15, y: 0 } },
    { result: false, point: { x: -1, y: 14 } },
    { result: false, point: { x: 14, y: -1 } },

    { result: true, point: { x: 9, y: 0 } },
    { result: true, point: { x: 0, y: 4 } },
    { result: true, point: { x: 14, y: 7 } },
    { result: true, point: { x: 13, y: 14 } },
  ]
  tests.forEach(test => {
    it(
      'should find if point is within borders of the board ' + JSON.stringify(test.point) + ' is ' + test.result,
      () => {
        expect(isWithinBoard(test.point, mockBoardFactory())).to.eq(test.result)
      },
    )
  })
})
