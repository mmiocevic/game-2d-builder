import { PlayerActionTypes, PlayerGender } from './PlayerActionTypes';

export interface SetNameActionType {
   type: PlayerActionTypes.SET_NAME;
   name: string;
}

export const setNameActionCreator = (name: string): SetNameActionType => ({
   type: PlayerActionTypes.SET_NAME,
   name
});

export interface SetGenderActionType {
   type: PlayerActionTypes.SET_GENDER;
   gender: PlayerGender;
}

export const setGenderActionCreator = (gender: PlayerGender): SetGenderActionType => ({
   type: PlayerActionTypes.SET_GENDER,
   gender
});