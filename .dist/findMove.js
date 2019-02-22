"use strict";
exports.__esModule = true;
var hasFood_1 = require("./hasFood");
var isEmpty_1 = require("./isEmpty");
var isWithinBoard_1 = require("./isWithinBoard");
function isNextTo(options, board, callback) {
    var move = '';
    Object.keys(options).forEach(function (key) {
        var point = options[key];
        if (isWithinBoard_1.isWithinBoard(point, board)) {
            if (callback(point, board)) {
                move = key;
            }
        }
    });
    return move;
}
exports.isNextTo = isNextTo;
function findMove(body) {
    var board = body.board;
    var head = body.you.body[0];
    console.log("Debug head: ", head);
    var options = {
        right: {
            x: head.x + 1,
            y: head.y
        },
        down: {
            x: head.x,
            y: head.y + 1
        },
        left: {
            x: head.x - 1,
            y: head.y
        },
        up: {
            x: head.x,
            y: head.y - 1
        }
    };
    var getFood = isNextTo(options, board, hasFood_1.hasFood);
    if (getFood) {
        console.log('Debug getFood: ', getFood);
        return getFood;
    }
    var goToEmpty = isNextTo(options, board, isEmpty_1.isEmpty);
    if (goToEmpty) {
        console.log('Debug goToEmpty: ', goToEmpty);
        return goToEmpty;
    }
    console.log("no empty square found, so let's just go up");
    return 'up';
}
exports.findMove = findMove;
