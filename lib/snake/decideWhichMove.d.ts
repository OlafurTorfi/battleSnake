import { IState } from './types';
export declare function foundNoApple(state?: IState): boolean;
export declare function decideWhichMove(forwardState?: IState, leftState?: IState, rightState?: IState, forwardRandom?: number, leftRandom?: number, rightRandom?: number): "left" | "right" | "up" | "down" | "CannotFindApple";
