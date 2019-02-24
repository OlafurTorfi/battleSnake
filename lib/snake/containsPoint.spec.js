"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var containsPoint_1 = require("./containsPoint");
var mockData_1 = require("./mockData");
describe('containsPoint test', function () {
    var tests = [
        { result: false, point: { x: 8, y: 3 } },
        { result: false, point: { x: 8, y: 4 } },
        { result: false, point: { x: 14, y: 7 } },
        { result: false, point: { x: 13, y: 7 } },
        { result: true, point: { x: 9, y: 3 } },
    ];
    tests.forEach(function (test) {
        it('should find if array of points, contains point ' + JSON.stringify(test.point) + ' is ' + test.result, function () {
            chai_1.expect(containsPoint_1.containsPoint(mockData_1.mockBoardFactory().food, test.point)).to.eq(test.result);
        });
    });
});
