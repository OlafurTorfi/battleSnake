import { IPoint } from './types'

export function getDirections(head: IPoint, neck: IPoint) {
  const deltaX = head.x - neck.x
  const deltaY = head.y - neck.y
  const forward = { x: head.x + deltaX, y: head.y + deltaY }
  const right = { x: head.x - deltaY, y: head.y + deltaX }
  const left = { x: head.x + deltaY, y: head.y - deltaX }
  return { forward, left, right }
}
