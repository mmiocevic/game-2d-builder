import { GameActionTypes, GameStatus } from './GameActionTypes';

export interface SetStatusActionType {
   type: GameActionTypes.SET_STATUS;
   status: GameStatus;
}

export const setStatusActionCreator = (status: GameStatus): SetStatusActionType => ({
   type: GameActionTypes.SET_STATUS,
   status
});