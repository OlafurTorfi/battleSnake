"use strict";
exports.__esModule = true;
function containsPoint(arrayOfPoints, point) {
    return arrayOfPoints.some(function (p) {
        return p.x === point.x && p.y === point.y;
    });
}
exports.containsPoint = containsPoint;
