import { expect } from 'chai';
import { isWithinBoard } from './isWithinBoard';
import { mockBoard } from './mockData';
describe('is Within Board test', () => {
  [
    { result: false, point: { x: 0, y: 15 } },
    { result: false, point: { x: 15, y: 0 } },
    { result: false, point: { x: 1, y: 16 } },
    { result: false, point: { x: 16, y: 1 } },

    { result: true, point: { x: 9, y: 1 } },
    { result: true, point: { x: 7, y: 4 } },
    { result: true, point: { x: 15, y: 7 } },
    { result: true, point: { x: 13, y: 8 } },
  ].forEach(test => {
    it(
      'should find if point is within borders of the board ' + JSON.stringify(test.point) + ' is ' + test.result,
      () => {
        expect(isWithinBoard(test.point, mockBoard)).to.eq(test.result);
      },
    );
  });
});
