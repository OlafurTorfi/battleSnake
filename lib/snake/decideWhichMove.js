"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moveOnMap_1 = require("./moveOnMap");
function foundNoApple(state) {
    if (!state || state.mCount.current === 0) {
        return true;
    }
    return false;
}
exports.foundNoApple = foundNoApple;
function decideWhichMove(forwardState, leftState, rightState, forwardRandom, leftRandom, rightRandom) {
    if (forwardRandom === void 0) { forwardRandom = 1; }
    if (leftRandom === void 0) { leftRandom = 1; }
    if (rightRandom === void 0) { rightRandom = 1; }
    if (foundNoApple(forwardState) && foundNoApple(rightState) && foundNoApple(leftState)) {
        return 'CannotFindApple';
    }
    if (forwardState &&
        (!rightState || forwardState.mCount.current * forwardRandom > rightState.mCount.current * rightRandom) &&
        (!leftState || forwardState.mCount.current * forwardRandom > leftState.mCount.current * leftRandom)) {
        // console.log(
        //   `forward because fVal ${forwardState.mCount.current * forwardRandom}, rVal ${rightState &&
        //     rightState.mCount.current * rightRandom}, lVal ${leftState &&
        //     leftState.mCount.current * leftRandom}. And Move is therefore ${moveOnMap(
        //     forwardState.lastMove,
        //   )} based on ${JSON.stringify(forwardState.lastMove)}`,
        // )
        return moveOnMap_1.moveOnMap(forwardState.lastMove);
    }
    if (leftState && (!rightState || leftState.mCount.current * leftRandom > rightState.mCount.current * rightRandom)) {
        // console.log(
        //   `left because fVal ${forwardState && forwardState.mCount.current * forwardRandom}, rVal ${rightState &&
        //     rightState.mCount.current * rightRandom}, lVal ${leftState &&
        //     leftState.mCount.current * leftRandom}. And Move is therefore ${moveOnMap(
        //     leftState.lastMove,
        //   )} based on ${JSON.stringify(leftState.lastMove)}`,
        // )
        return moveOnMap_1.moveOnMap(leftState.lastMove);
    }
    if (rightState) {
        // console.log(
        //   `right because fVal ${forwardState && forwardState.mCount.current * forwardRandom}, rVal ${rightState &&
        //     rightState.mCount.current * rightRandom}, lVal ${leftState &&
        //     leftState.mCount.current * leftRandom}. And Move is therefore ${moveOnMap(
        //     rightState.lastMove,
        //   )} based on ${JSON.stringify(rightState.lastMove)}`,
        // )
        return moveOnMap_1.moveOnMap(rightState.lastMove);
    }
    // console.log('Waz will blindly go upwards to his death')
    return 'up';
}
exports.decideWhichMove = decideWhichMove;
