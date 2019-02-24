"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getDirections_1 = require("./getDirections");
var evaluateLevel_1 = require("./evaluateLevel");
var decideWhichMove_1 = require("./decideWhichMove");
var evaluateMove_1 = require("./evaluateMove");
var greed = 1;
function evaluateLevelLoop(level, numberOfIterations, levelsToEvaluate, valueEmptySquare) {
    if (valueEmptySquare === void 0) { valueEmptySquare = false; }
    if (numberOfIterations < levelsToEvaluate) {
        var proximityBias = (levelsToEvaluate - numberOfIterations) * (levelsToEvaluate - numberOfIterations);
        var foodValue = greed + proximityBias;
        return evaluateLevelLoop(evaluateLevel_1.evaluateLevel(level, foodValue, valueEmptySquare), numberOfIterations + 1, levelsToEvaluate);
    }
    return;
}
function findMove(body, levelsToEvaluate, hasRandom) {
    if (levelsToEvaluate === void 0) { levelsToEvaluate = 6; }
    if (hasRandom === void 0) { hasRandom = true; }
    var board = body.board;
    var head = body.you.body[0];
    var hasWeirdBody = !body.you.body[1] || (head.x === body.you.body[1].x && head.y === body.you.body[1].y);
    var lastMove = hasWeirdBody ? getDirections_1.getInitialPosition(board, head) : { to: head, from: body.you.body[1] || head };
    // console.log('Debug lastMove: ', hasWeirdBody, lastMove, ', head: ', head, ', body: ', body.you.body[1])
    var directions = getDirections_1.getDirections(lastMove.to, lastMove.from);
    var moveForward = { to: directions.forward, from: head };
    var moveLeft = { to: directions.left, from: head };
    var moveRight = { to: directions.right, from: head };
    // console.log(
    //   'Debug moveForward: ',
    //   JSON.stringify(moveForward),
    //   ', moveLeft:',
    //   JSON.stringify(moveLeft),
    //   ', moveRight: ',
    //   JSON.stringify(moveRight),
    // )
    var preStateForward = { board: board, lastMove: lastMove, mCount: { current: 0, decision: 'forward' } };
    var preStateLeft = { board: board, lastMove: lastMove, mCount: { current: 0, decision: 'left' } };
    var preStateRight = { board: board, lastMove: lastMove, mCount: { current: 0, decision: 'right' } };
    var proximityBias = Math.pow(levelsToEvaluate, 3);
    var foodValue = greed + proximityBias;
    var stateForward = evaluateMove_1.evaluateMove(preStateForward, moveForward, foodValue);
    var stateLeft = evaluateMove_1.evaluateMove(preStateLeft, moveLeft, foodValue);
    var stateRight = evaluateMove_1.evaluateMove(preStateRight, moveRight, foodValue);
    var firstLevel = [];
    if (stateForward) {
        firstLevel.push(stateForward);
    }
    if (stateLeft) {
        firstLevel.push(stateLeft);
    }
    if (stateRight) {
        firstLevel.push(stateRight);
    }
    evaluateLevelLoop(firstLevel, 1, levelsToEvaluate);
    // add some randomness to break out of cycles'
    var wormRandomnessPercentage = 40;
    var randomForwardMultiplyer = 1 - Math.random() / wormRandomnessPercentage;
    var randomLeftMultiplyer = 1 - Math.random() / wormRandomnessPercentage;
    var randomRightMultiplyer = 1 - Math.random() / wormRandomnessPercentage;
    var nextMove = decideWhichMove_1.decideWhichMove(stateForward, stateLeft, stateRight, randomForwardMultiplyer, randomLeftMultiplyer, randomRightMultiplyer);
    if (nextMove === 'CannotFindApple') {
        // console.log('Found no apple so evaluating move again with empty squares valued')
        stateForward = evaluateMove_1.evaluateMove(preStateForward, moveForward, foodValue, true);
        stateLeft = evaluateMove_1.evaluateMove(preStateLeft, moveLeft, foodValue, true);
        stateRight = evaluateMove_1.evaluateMove(preStateRight, moveRight, foodValue, true);
        firstLevel = [];
        if (stateForward) {
            firstLevel.push(stateForward);
        }
        if (stateLeft) {
            firstLevel.push(stateLeft);
        }
        if (stateRight) {
            firstLevel.push(stateRight);
        }
        evaluateLevelLoop(firstLevel, 1, levelsToEvaluate, true);
        return decideWhichMove_1.decideWhichMove(stateForward, stateLeft, stateRight, randomForwardMultiplyer, randomLeftMultiplyer, randomRightMultiplyer);
    }
    return nextMove;
}
exports.findMove = findMove;
