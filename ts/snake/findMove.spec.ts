import { expect } from 'chai'
import { findMove } from './findMove'
import { mockBoard, mockMe } from './mockData'
describe('findMove test', () => {
  it('should do a top down search and evaluate paths based on mutable value', () => {
    const move = findMove({ board: mockBoard, you: mockMe })
    expect(move).to.eq('left')
  })
})
