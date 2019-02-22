"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var isEmpty_1 = require("./isEmpty");
var mockData_1 = require("./mockData");
describe('isEmpty test', function () {
    ;
    [
        { result: false, point: { x: 8, y: 3 } },
        { result: false, point: { x: 8, y: 4 } },
        { result: false, point: { x: 14, y: 7 } },
        { result: false, point: { x: 13, y: 7 } },
        { result: true, point: { x: 9, y: 3 } },
        { result: true, point: { x: 7, y: 4 } },
        { result: true, point: { x: 15, y: 7 } },
        { result: true, point: { x: 13, y: 8 } },
    ].forEach(function (test) {
        it('should find if point is empty ' + JSON.stringify(test.point) + ' is ' + test.result, function () {
            chai_1.expect(isEmpty_1.isEmpty(test.point, mockData_1.mockBoard)).to.eq(test.result);
        });
    });
});
