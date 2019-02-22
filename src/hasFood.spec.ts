import { expect } from 'chai'
import { hasFood } from './hasFood'
import { mockBoard } from './mockData'
describe('hasFood test', () => {
  ;[
    { result: false, point: { x: 8, y: 3 } },
    { result: false, point: { x: 8, y: 4 } },
    { result: false, point: { x: 14, y: 7 } },
    { result: false, point: { x: 13, y: 7 } },

    { result: true, point: { x: 9, y: 3 } },
  ].forEach(test => {
    it('should find if board contains food at point ' + JSON.stringify(test.point) + ' is ' + test.result, () => {
      expect(hasFood(test.point, mockBoard)).to.eq(test.result)
    })
  })
})
