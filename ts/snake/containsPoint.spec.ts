import { expect } from 'chai'
import { containsPoint } from './containsPoint'
import { mockBoard } from './mockData'
describe('containsPoint test', () => {
  const tests = [
    { result: false, point: { x: 8, y: 3 } },
    { result: false, point: { x: 8, y: 4 } },
    { result: false, point: { x: 14, y: 7 } },
    { result: false, point: { x: 13, y: 7 } },

    { result: true, point: { x: 9, y: 3 } },
  ]
  tests.forEach(test => {
    it('should find if array of points, contains point ' + JSON.stringify(test.point) + ' is ' + test.result, () => {
      expect(containsPoint(mockBoard.food, test.point)).to.eq(test.result)
    })
  })
})
