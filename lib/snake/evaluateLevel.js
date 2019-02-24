"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var evaluateMove_1 = require("./evaluateMove");
var getDirections_1 = require("./getDirections");
function evaluateLevel(queueIn, foodValue, valueEmptySquare) {
    if (foodValue === void 0) { foodValue = 3; }
    if (valueEmptySquare === void 0) { valueEmptySquare = false; }
    var nextLevelQueue = [];
    while (queueIn.length > 0) {
        var state = queueIn.pop();
        if (!state) {
            throw new Error('No move found in queue!');
        }
        var directions = getDirections_1.getDirections(state.lastMove.to, state.lastMove.from);
        var forward = evaluateMove_1.evaluateMove(state, { to: directions.forward, from: state.lastMove.to }, foodValue, valueEmptySquare);
        var right = evaluateMove_1.evaluateMove(state, { to: directions.right, from: state.lastMove.to }, foodValue, valueEmptySquare);
        var left = evaluateMove_1.evaluateMove(state, { to: directions.left, from: state.lastMove.to }, foodValue, valueEmptySquare);
        if (forward) {
            nextLevelQueue.push(forward);
        }
        if (right) {
            nextLevelQueue.push(right);
        }
        if (left) {
            nextLevelQueue.push(left);
        }
    }
    return nextLevelQueue;
}
exports.evaluateLevel = evaluateLevel;
