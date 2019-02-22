"use strict";
exports.__esModule = true;
function isEmpty(p, board) {
    return !board.snakes.some(function (snake) {
        return snake.body.some(function (point) {
            return point.x === p.x && point.y === p.y;
        });
    });
}
exports.isEmpty = isEmpty;
