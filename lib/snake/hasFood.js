"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var containsPoint_1 = require("./containsPoint");
// this function is basically syntax sugar
function hasFood(p, board) {
    return containsPoint_1.containsPoint(board.food, p);
}
exports.hasFood = hasFood;
