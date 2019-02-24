"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isWithinBoard_1 = require("./isWithinBoard");
var isPartOfSnake_1 = require("./isPartOfSnake");
var modifyBoard_1 = require("./modifyBoard");
var hasFood_1 = require("./hasFood");
function evaluateMove(state, move, foodValue, valueEmptySquares) {
    if (foodValue === void 0) { foodValue = 3; }
    if (valueEmptySquares === void 0) { valueEmptySquares = false; }
    if (!isWithinBoard_1.isWithinBoard(move.to, state.board) || isPartOfSnake_1.isPartOfSnake(move.to, state.board)) {
        return undefined;
    }
    if (hasFood_1.hasFood(move.to, state.board)) {
        // console.log(
        //   `I found food at worth ${foodValue} going ${moveOnMap(move)} to ${JSON.stringify(move.to)} on the ${
        //     state.mCount.decision
        //   } trajectory`,
        // )
        state.mCount.current += foodValue;
    }
    else if (valueEmptySquares) {
        state.mCount.current += 1;
    }
    return { board: modifyBoard_1.moveSnake(state.board, move), lastMove: move, mCount: state.mCount };
}
exports.evaluateMove = evaluateMove;
