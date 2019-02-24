"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var containsPoint_1 = require("./containsPoint");
function moveSnake(board, move) {
    var newSnakePositions = board.snakes.map(function (snake) {
        if (containsPoint_1.containsPoint(snake.body, move.from)) {
            var newSnakeBody = snake.body.slice(0, snake.body.length - 1);
            var newSnake = { id: snake.id, name: snake.name, health: snake.health, body: [move.to].concat(newSnakeBody) };
            return newSnake;
        }
        return snake;
    });
    var newBoard = {
        food: board.food.filter(function (f) { return f.x !== move.to.x || f.y !== move.to.y; }),
        height: board.height,
        width: board.width,
        snakes: newSnakePositions,
    };
    return newBoard;
}
exports.moveSnake = moveSnake;
