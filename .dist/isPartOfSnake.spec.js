"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var isPartOfSnake_1 = require("./isPartOfSnake");
var mockData_1 = require("./mockData");
describe('isPartOfSnake test', function () {
    var tests = [
        { result: true, point: { x: 8, y: 3 } },
        { result: true, point: { x: 8, y: 4 } },
        { result: true, point: { x: 14, y: 7 } },
        { result: true, point: { x: 13, y: 7 } },
        { result: false, point: { x: 8, y: 6 } },
        { result: false, point: { x: 8, y: 9 } },
        { result: false, point: { x: 12, y: 7 } },
        { result: false, point: { x: 6, y: 7 } },
    ];
    tests.forEach(function (test) {
        it('should find if point is part of snake' + JSON.stringify(test.point) + ' is ' + test.result, function () {
            chai_1.expect(isPartOfSnake_1.isPartOfSnake(test.point, mockData_1.mockBoard)).to.eq(test.result);
        });
    });
});
