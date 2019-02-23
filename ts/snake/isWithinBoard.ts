export function isWithinBoard(p, board) {
  return p.x > 0 && p.y > 0 && p.x <= board.width && p.y <= board.height
}
