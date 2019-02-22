"use strict";
exports.__esModule = true;
var containsPoint_1 = require("./containsPoint");
function hasFood(p, board) {
    return containsPoint_1.containsPoint(board.food, p);
}
exports.hasFood = hasFood;
