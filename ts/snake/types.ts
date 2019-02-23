export interface IPoint {
  x: number
  y: number
}
export interface ISnake {
  id: string
  name: string
  health: number
  body: IPoint[]
}
export interface IBoard {
  height: number
  width: number
  food: IPoint[]
  snakes: ISnake[]
}
export interface IMove {
  to: IPoint
  from: IPoint
}
export interface IState {
  board: IBoard
  lastMove: IMove
  mCount: IMutatableCount
}
export interface IMutatableCount {
  current: number
}
export interface IBody {
  board: IBoard
  you: ISnake
}
