import { hasFood } from './hasFood';
import { isEmpty } from './isEmpty';
import { isWithinBoard } from './isWithinBoard';

export function isNextTo(options, board, callback) {
  let move = '';
  Object.keys(options).forEach(key => {
    const point = options[key];
    if (isWithinBoard(point, board)) {
      if (callback(point, board)) {
        move = key;
      }
    }
  });
  return move;
}
export function findMove(body) {
  const board = body.board;
  const head = body.you.body[0];
  console.log(`Debug head: `, head);
  const options = {
    right: {
      x: head.x + 1,
      y: head.y,
    },
    down: {
      x: head.x,
      y: head.y + 1,
    },
    left: {
      x: head.x - 1,
      y: head.y,
    },
    up: {
      x: head.x,
      y: head.y - 1,
    },
  };
  const getFood = isNextTo(options, board, hasFood);
  if (getFood) {
    console.log('Debug getFood: ', getFood);
    return getFood;
  }
  const goToEmpty = isNextTo(options, board, isEmpty);
  if (goToEmpty) {
    console.log('Debug goToEmpty: ', goToEmpty);
    return goToEmpty;
  }
  console.log("no empty square found, so let's just go up");
  return 'up';
}
