"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isWithinBoard(p, board) {
    return p.x >= 0 && p.y >= 0 && p.x < board.width && p.y < board.height;
}
exports.isWithinBoard = isWithinBoard;
