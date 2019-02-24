"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isWithinBoard_1 = require("./isWithinBoard");
var hasFood_1 = require("./hasFood");
var isPartOfSnake_1 = require("./isPartOfSnake");
function getDirections(head, neck) {
    var deltaX = head.x - neck.x;
    var deltaY = head.y - neck.y;
    var forward = { x: head.x + deltaX, y: head.y + deltaY };
    var right = { x: head.x - deltaY, y: head.y + deltaX };
    var left = { x: head.x + deltaY, y: head.y - deltaX };
    return { forward: forward, left: left, right: right };
}
exports.getDirections = getDirections;
function getInitialPosition(board, position) {
    var up = { x: position.x, y: position.y - 1 };
    var down = { x: position.x, y: position.y + 1 };
    var right = { x: position.x + 1, y: position.y };
    var left = { x: position.x - 1, y: position.y };
    function hasDecentLastMoveAssumption(lastPoint) {
        if (!isWithinBoard_1.isWithinBoard(lastPoint, board) || isPartOfSnake_1.isPartOfSnake(lastPoint, board)) {
            return { to: position, from: lastPoint };
        }
        if (hasFood_1.hasFood(lastPoint, board)) {
            return {
                to: position,
                from: { x: position.x + (position.x - lastPoint.x), y: position.y + (position.y - lastPoint.y) },
            };
        }
        return false;
    }
    return (hasDecentLastMoveAssumption(up) ||
        hasDecentLastMoveAssumption(down) ||
        hasDecentLastMoveAssumption(right) ||
        hasDecentLastMoveAssumption(left) || { to: position, from: down });
}
exports.getInitialPosition = getInitialPosition;
