"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mockBoardFactory(boardName) {
    if (boardName === void 0) { boardName = 'default'; }
    var boardCollection = {
        default: {
            height: 15,
            width: 15,
            food: [{ x: 9, y: 3 }],
            snakes: [
                {
                    id: '7515ecbf-b807-481d-96be-25b3fbcd949a',
                    name: 'testsnake1',
                    health: 96,
                    body: [{ x: 8, y: 3 }, { x: 8, y: 4 }],
                },
                {
                    id: '7515ecbf-b807-481d-96be-25b3fbcd949a',
                    name: 'testsnake2',
                    health: 96,
                    body: [{ x: 14, y: 7 }, { x: 13, y: 7 }],
                },
            ],
        },
        bodyInOnePointAtEdge: {
            height: 15,
            width: 15,
            food: [
                { x: 3, y: 13 },
                { x: 3, y: 14 },
                { x: 8, y: 0 },
                { x: 0, y: 7 },
                { x: 0, y: 1 },
                { x: 14, y: 13 },
                { x: 6, y: 13 },
                { x: 1, y: 11 },
                { x: 10, y: 4 },
                { x: 10, y: 8 },
            ],
            snakes: [
                {
                    id: '4111e65c-59b7-4832-9d00-3b324704975b',
                    name: 'Waz',
                    health: 100,
                    body: [{ x: 10, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 0 }],
                },
            ],
        },
        smallBoard: {
            height: 11,
            width: 11,
            food: [{ x: 10, y: 1 }, { x: 10, y: 5 }],
            snakes: [
                {
                    id: '7c05ee54-f038-4bf7-b021-a78728d75402',
                    name: 'w',
                    health: 100,
                    body: [{ x: 1, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 1 }],
                },
            ],
        },
    };
    var selected = boardCollection[boardName];
    if (!selected) {
        throw new Error('board not found');
    }
    return selected;
}
exports.mockBoardFactory = mockBoardFactory;
function mockSnakeFactory(name) {
    if (name === void 0) { name = 'default'; }
    var snakeCollection = {
        default: {
            id: 'bb39f077-032b-48b3-9c94-3684a595ccb9',
            name: 'Waz',
            health: 98,
            body: [{ x: 8, y: 3 }, { x: 8, y: 4 }],
        },
        bodyInOnePointAtEdge: {
            id: '4111e65c-59b7-4832-9d00-3b324704975b',
            name: 'Waz',
            health: 100,
            body: [{ x: 10, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 0 }],
        },
        farAwayFromFoodOnSmallBoard: {
            id: '7c05ee54-f038-4bf7-b021-a78728d75402',
            name: 'Waz',
            health: 100,
            body: [{ x: 1, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 1 }],
        },
    };
    return snakeCollection[name];
}
exports.mockSnakeFactory = mockSnakeFactory;
