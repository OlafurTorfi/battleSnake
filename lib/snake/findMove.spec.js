"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var findMove_1 = require("./findMove");
var mockData_1 = require("./mockData");
describe('findMove test', function () {
    it('should do a top down search and evaluate paths based on mutable value', function () {
        var move = findMove_1.findMove({ board: mockData_1.mockBoardFactory(), you: mockData_1.mockSnakeFactory() }, 8, false);
        chai_1.expect(move).to.eq('right');
    });
    it('should prefer a route with apples', function () {
        var board = mockData_1.mockBoardFactory();
        var you = mockData_1.mockSnakeFactory();
        board.food.push({ x: 10, y: 3 });
        board.food.push({ x: 10, y: 5 });
        chai_1.expect(findMove_1.findMove({ board: board, you: you }, 3, false)).to.eq('right');
        you.body = [{ x: 9, y: 3 }].concat(you.body);
        board.snakes[0].body = [{ x: 9, y: 3 }].concat(board.snakes[0].body);
        chai_1.expect(findMove_1.findMove({ board: board, you: you }, 3, false)).to.eq('right');
        you.body = [{ x: 10, y: 3 }].concat(you.body);
        board.snakes[0].body = [{ x: 10, y: 3 }].concat(board.snakes[0].body);
        chai_1.expect(findMove_1.findMove({ board: board, you: you }, 3, false)).to.eq('down');
        you.body = [{ x: 10, y: 4 }].concat(you.body);
        board.snakes[0].body = [{ x: 10, y: 4 }].concat(board.snakes[0].body);
        chai_1.expect(findMove_1.findMove({ board: board, you: you }, 3, false)).to.eq('down');
    });
    it('should be able to find a move even though starting snake has three points in the same place', function () {
        var board = mockData_1.mockBoardFactory('bodyInOnePointAtEdge');
        var you = mockData_1.mockSnakeFactory('bodyInOnePointAtEdge');
        chai_1.expect(findMove_1.findMove({ board: board, you: you }, 3, false)).to.eq('left');
    });
});
