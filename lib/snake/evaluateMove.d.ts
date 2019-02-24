import { IMove, IState } from './types';
export declare function evaluateMove(state: IState, move: IMove, foodValue?: number, valueEmptySquares?: boolean): IState | undefined;
