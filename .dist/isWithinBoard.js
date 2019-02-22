"use strict";
exports.__esModule = true;
function isWithinBoard(p, board) {
    console.log('Debug board.width, board.height: ', board.width, board.height);
    return p.x > 0 && p.y > 0 && p.x <= board.width && p.y <= board.height;
}
exports.isWithinBoard = isWithinBoard;
