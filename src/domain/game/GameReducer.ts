import { AnyAction } from 'redux';
import { GameActionTypes, GameStatus } from './GameActionTypes';
import { SetStatusActionType } from './GameActionCreators';

export interface GameReducerState {
   status: GameStatus;
}

const gameState: GameReducerState = {
   status: GameStatus.WELCOME
};

export const GameReducer = (state = gameState, action: AnyAction) => {
   switch (action.type) {
      case GameActionTypes.SET_STATUS:
         return setStatusHandler(state, action as SetStatusActionType);
      default:
         return state;
   }
};

const setStatusHandler = (state: GameReducerState, action: SetStatusActionType) => ({
   ...state,
   status: action.status
});