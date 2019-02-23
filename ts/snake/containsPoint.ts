import { IPoint } from './types';

export function containsPoint(arrayOfPoints: IPoint[], point: IPoint) {
  return arrayOfPoints.some(p => {
    return p.x === point.x && p.y === point.y;
  });
}
