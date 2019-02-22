import { expect } from 'chai'
import { isEmpty } from './isEmpty'
import { mockBoard } from './mockData'
describe('isEmpty test', () => {
  ;[
    { result: false, point: { x: 8, y: 3 } },
    { result: false, point: { x: 8, y: 4 } },
    { result: false, point: { x: 14, y: 7 } },
    { result: false, point: { x: 13, y: 7 } },

    { result: true, point: { x: 9, y: 3 } },
    { result: true, point: { x: 7, y: 4 } },
    { result: true, point: { x: 15, y: 7 } },
    { result: true, point: { x: 13, y: 8 } },
  ].forEach(test => {
    it('should find if point is empty ' + JSON.stringify(test.point) + ' is ' + test.result, () => {
      expect(isEmpty(test.point, mockBoard)).to.eq(test.result)
    })
  })
})
