"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function containsPoint(arrayOfPoints, point) {
    return arrayOfPoints.some(function (p) {
        return p.x === point.x && p.y === point.y;
    });
}
exports.containsPoint = containsPoint;
