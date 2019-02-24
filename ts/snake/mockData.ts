import { IBoard } from './types'

export function mockBoardFactory(boardName: string = 'default'): IBoard {
  const boardCollection = {
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
  }
  const selected = boardCollection[boardName]
  if (!selected) {
    throw new Error('board not found')
  }
  return selected
}
export function mockSnakeFactory(name: string = 'default') {
  const snakeCollection = {
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
  }
  return snakeCollection[name]
}
