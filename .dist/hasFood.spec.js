"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var hasFood_1 = require("./hasFood");
var mockData_1 = require("./mockData");
describe('hasFood test', function () {
    ;
    [
        { result: false, point: { x: 8, y: 3 } },
        { result: false, point: { x: 8, y: 4 } },
        { result: false, point: { x: 14, y: 7 } },
        { result: false, point: { x: 13, y: 7 } },
        { result: true, point: { x: 9, y: 3 } },
    ].forEach(function (test) {
        it('should find if board contains food at point ' + JSON.stringify(test.point) + ' is ' + test.result, function () {
            chai_1.expect(hasFood_1.hasFood(test.point, mockData_1.mockBoard)).to.eq(test.result);
        });
    });
});
