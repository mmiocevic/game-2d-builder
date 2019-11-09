import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { GameAppStore } from '../../../configurations/Store';
import { getLocalizedMessage } from '../../../configurations/localization/messages';
import { setGenderActionCreator, setNameActionCreator } from '../../../domain/player/PlayerActionCreators';
import { PlayerGender } from '../../../domain/player/PlayerActionTypes';
import { debounce } from '../../../utilities/debounce';
import { Anim } from '../../__internal__/anim/Anim';
import Input from 'antd/lib/input/index';
import { PlayerGenderChooserComponent } from './player-gender-chooser/PlayerGenderChooserComponent';
import './PlayerCreationScreen.less';

const className: string = 'player-creation-screen';

interface PlayerCreationScreenState {
   currentPlayerName: string;
}

type PlayerCreationScreenProps = PropsState & DispatchState;

class PlayerCreationScreenContainer extends React.Component<PlayerCreationScreenProps, PlayerCreationScreenState> {
   private setPlayerNameDebounced: () => void;

   constructor(props: PlayerCreationScreenProps) {
      super(props);

      this.state = {
         currentPlayerName: props.playerName
      };

      this.setPlayerNameDebounced = debounce(() => {
         this.props.setPlayerName(this.state.currentPlayerName);
      }, 500);
   }

   render() {
      const { playerName, playerGender, setPlayerGender } = this.props;

      return (
         <div className={`${className}`}>
            <div className={`${className}__welcome-message`}>{getLocalizedMessage('Welcome!')}</div>

            <div>
               <div>{getLocalizedMessage('WhatIsYourName?')}</div>
               <Input
                  value={this.state.currentPlayerName}
                  onChange={this.onPlayerNameChange}
               />
            </div>

            <Anim showWhen={playerName !== ''}>
               <>
                  {playerName && (<div>{getLocalizedMessage('Hello')} {playerName}!</div>)}
                  <PlayerGenderChooserComponent
                     playerGender={playerGender}
                     setPlayerGender={setPlayerGender}
                  />
               </>
            </Anim>
         </div>
      );
   }

   private onPlayerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
         currentPlayerName: e.target.value
      });
      this.setPlayerNameDebounced();
   };
}

interface PropsState {
   playerName: string;
   playerGender: PlayerGender
}

const mapStateToProps = (state: GameAppStore): PropsState => ({
   playerName: state.playerReducer.name,
   playerGender: state.playerReducer.gender
});

interface DispatchState {
   setPlayerName: (name: string) => void;
   setPlayerGender: (name: PlayerGender) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchState => ({
   setPlayerName: (name: string) => dispatch(setNameActionCreator(name)),
   setPlayerGender: (gender: PlayerGender) => dispatch(setGenderActionCreator(gender))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(PlayerCreationScreenContainer);