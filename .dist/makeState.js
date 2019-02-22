"use strict";
exports.__esModule = true;
var isWithinBoard_1 = require("./isWithinBoard");
var isPartOfSnake_1 = require("./isPartOfSnake");
var hasFood_1 = require("./hasFood");
function makeState(board, move, myHead, value) {
    if (!isWithinBoard_1.isWithinBoard(move, board)) {
        return undefined;
    }
    if (isPartOfSnake_1.isPartOfSnake(move, board)) {
        return undefined;
    }
    if (hasFood_1.hasFood(move, board)) {
        value.current = value.current + 3;
    }
    else {
        value.current = value.current + 1;
    }
    // Todo append move position to snake in board
    return { board: board, myHead: move };
}
exports.makeState = makeState;
