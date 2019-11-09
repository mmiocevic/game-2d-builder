import { AnyAction } from 'redux';
import { PlayerActionTypes, PlayerGender } from './PlayerActionTypes';
import { SetGenderActionType, SetNameActionType } from './PlayerActionCreators';

export interface PlayerReducerState {
   name: string;
   gender: PlayerGender;
}

const playerState: PlayerReducerState = {
   name: '',
   gender: PlayerGender.NONE
};

export const PlayerReducer = (state = playerState, action: AnyAction) => {
   switch (action.type) {
      case PlayerActionTypes.SET_NAME:
         return setNameHandler(state, action as SetNameActionType);
      case PlayerActionTypes.SET_GENDER:
         return setGenderHandler(state, action as SetGenderActionType);
      default:
         return state;
   }
};

const setNameHandler = (state: PlayerReducerState, action: SetNameActionType) => ({
   ...state,
   name: action.name
});

const setGenderHandler = (state: PlayerReducerState, action: SetGenderActionType) => ({
   ...state,
   gender: action.gender
});