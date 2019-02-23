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
export interface IState {
  myHead: IPoint
  forward?: IState
  right?: IState
  left?: IState
  board: IBoard
}
