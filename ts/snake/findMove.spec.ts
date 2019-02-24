import { expect } from 'chai'
import { findMove } from './findMove'
import { mockBoardFactory, mockSnakeFactory } from './mockData'
describe('findMove test', () => {
  it('should do a top down search and evaluate paths based on mutable value', () => {
    const move = findMove({ board: mockBoardFactory(), you: mockSnakeFactory() }, 8, false)
    expect(move).to.eq('right')
  })
  it('should prefer a route with apples', () => {
    const board = mockBoardFactory()
    const you = mockSnakeFactory()
    board.food.push({ x: 10, y: 3 })
    board.food.push({ x: 10, y: 5 })
    expect(findMove({ board, you }, 3, false)).to.eq('right')
    you.body = [{ x: 9, y: 3 }, ...you.body]
    board.snakes[0].body = [{ x: 9, y: 3 }, ...board.snakes[0].body]
    expect(findMove({ board, you }, 3, false)).to.eq('right')
    you.body = [{ x: 10, y: 3 }, ...you.body]
    board.snakes[0].body = [{ x: 10, y: 3 }, ...board.snakes[0].body]
    expect(findMove({ board, you }, 3, false)).to.eq('down')
    you.body = [{ x: 10, y: 4 }, ...you.body]
    board.snakes[0].body = [{ x: 10, y: 4 }, ...board.snakes[0].body]
    expect(findMove({ board, you }, 3, false)).to.eq('down')
  })
  it('should be able to find a move even though starting snake has three points in the same place', () => {
    const board = mockBoardFactory('bodyInOnePointAtEdge')
    const you = mockSnakeFactory('bodyInOnePointAtEdge')
    expect(findMove({ board, you }, 3, false)).to.eq('left')
  })
  // it.only('should prefer a route with apples', () => {
  //   const board = mockBoardFactory('smallBoard')
  //   const you = mockSnakeFactory('farAwayFromFoodOnSmallBoard')
  //   expect(findMove({ board, you }, 3)).to.eq('right')
  //   you.body = [{ x: 2, y: 1 }, ...you.body]
  //   board.snakes[0].body = [{ x: 2, y: 1 }, board.snakes[0].body[0]]
  //   expect(findMove({ board, you }, 3)).to.eq('down')
  //   expect(findMove({ board, you }, 3)).to.eq('left')
  //   expect(findMove({ board, you }, 3)).to.eq('up')
  //   expect(findMove({ board, you }, 3)).to.eq('right')
  //   expect(findMove({ board, you }, 3)).to.eq('down')
  //   expect(findMove({ board, you }, 3)).to.eq('left')
  // })
})
