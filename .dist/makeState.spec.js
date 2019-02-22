"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var makeState_1 = require("./makeState");
var mockData_1 = require("./mockData");
describe('make state test', function () {
    it('should make position', function () {
        var forward = { x: 8, y: 2 };
        var myHead = { x: 8, y: 3 };
        var newState = makeState_1.makeState(mockData_1.mockBoard, forward, myHead, { current: 0 });
        chai_1.expect(newState && newState.myHead).to.eq(forward);
    });
    it('should return undefined if move is out of board', function () {
        chai_1.expect(makeState_1.makeState(mockData_1.mockBoard, { x: 0, y: 4 }, { x: 1, y: 4 }, { current: 0 })).to.eq(undefined);
    });
    it('should return undefined if move is into another snake', function () {
        chai_1.expect(makeState_1.makeState(mockData_1.mockBoard, { x: 14, y: 7 }, { x: 14, y: 6 }, { current: 0 })).to.eq(undefined);
    });
    it('should increment value if move is available', function () {
        var value = { current: 0 };
        makeState_1.makeState(mockData_1.mockBoard, { x: 6, y: 4 }, { x: 5, y: 4 }, value);
        chai_1.expect(value.current).to.eq(1);
    });
    it('should increment value by three if there is food', function () {
        var value = { current: 0 };
        makeState_1.makeState(mockData_1.mockBoard, { x: 9, y: 3 }, { x: 9, y: 4 }, value);
        chai_1.expect(value.current).to.eq(3);
    });
});
