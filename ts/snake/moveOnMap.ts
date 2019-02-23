import { IMove } from './types'

export function moveOnMap(move: IMove) {
  const deltaX = move.to.x - move.from.x
  const deltaY = move.to.y - move.from.y
  if (deltaX === -1) {
    return 'left'
  } else if (deltaX === 1) {
    return 'right'
  } else if (deltaY === -1) {
    return 'up'
  } else if (deltaY === 1) {
    return 'down'
  }
  console.log('Waz has lost his mind and wants to move further than he can. Only to end up going down')
  return 'down'
}
