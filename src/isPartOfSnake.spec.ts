import { expect } from 'chai'
import { isPartOfSnake } from './isPartOfSnake'
import { mockBoard } from './mockData'
describe('isPartOfSnake test', () => {
  const tests = [
    { result: true, point: { x: 8, y: 3 } },
    { result: true, point: { x: 8, y: 4 } },
    { result: true, point: { x: 14, y: 7 } },
    { result: true, point: { x: 13, y: 7 } },

    { result: false, point: { x: 8, y: 6 } },
    { result: false, point: { x: 8, y: 9 } },
    { result: false, point: { x: 12, y: 7 } },
    { result: false, point: { x: 6, y: 7 } },
  ]
  tests.forEach(test => {
    it('should find if point is part of snake' + JSON.stringify(test.point) + ' is ' + test.result, () => {
      expect(isPartOfSnake(test.point, mockBoard)).to.eq(test.result)
    })
  })
})
