"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var isWithinBoard_1 = require("./isWithinBoard");
var mockData_1 = require("./mockData");
describe('is Within Board test', function () {
    [
        { result: false, point: { x: 0, y: 15 } },
        { result: false, point: { x: 15, y: 0 } },
        { result: false, point: { x: 1, y: 16 } },
        { result: false, point: { x: 16, y: 1 } },
        { result: true, point: { x: 9, y: 1 } },
        { result: true, point: { x: 7, y: 4 } },
        { result: true, point: { x: 15, y: 7 } },
        { result: true, point: { x: 13, y: 8 } },
    ].forEach(function (test) {
        it('should find if point is within borders of the board ' + JSON.stringify(test.point) + ' is ' + test.result, function () {
            chai_1.expect(isWithinBoard_1.isWithinBoard(test.point, mockData_1.mockBoard)).to.eq(test.result);
        });
    });
});
