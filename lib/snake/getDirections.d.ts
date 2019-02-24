import { IPoint, IBoard, IMove } from './types';
export declare function getDirections(head: IPoint, neck: IPoint): {
    forward: {
        x: number;
        y: number;
    };
    left: {
        x: number;
        y: number;
    };
    right: {
        x: number;
        y: number;
    };
};
export declare function getInitialPosition(board: IBoard, position: IPoint): IMove;
