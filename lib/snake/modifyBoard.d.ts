import { IBoard, IMove } from './types';
export declare function moveSnake(board: IBoard, move: IMove): {
    food: import("./types").IPoint[];
    height: number;
    width: number;
    snakes: import("./types").ISnake[];
};
