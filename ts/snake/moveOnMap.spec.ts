import { expect } from 'chai'
import { moveOnMap } from './moveOnMap'
describe('move on map test', () => {
  const tests = [
    { move: { to: { x: 3, y: 3 }, from: { x: 3, y: 4 } }, result: 'up' },
    { move: { to: { x: 3, y: 3 }, from: { x: 3, y: 2 } }, result: 'down' },
    { move: { to: { x: 3, y: 3 }, from: { x: 4, y: 3 } }, result: 'left' },
    { move: { to: { x: 3, y: 3 }, from: { x: 2, y: 3 } }, result: 'right' },
  ]
  tests.forEach(test => {
    it(`should translate move ${JSON.stringify(test.move)} to ${test.result}`, () => {
      expect(moveOnMap(test.move)).to.eq(test.result)
    })
  })
})
