"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var containsPoint_1 = require("./containsPoint");
function isPartOfSnake(point, board) {
    return board.snakes.some(function (snake) {
        return containsPoint_1.containsPoint(snake.body, point);
    });
}
exports.isPartOfSnake = isPartOfSnake;
