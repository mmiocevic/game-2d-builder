import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { GameAppStore } from '../configurations/Store';
import { setStatusActionCreator } from '../domain/game/GameActionCreators';
import { GameStatus } from '../domain/game/GameActionTypes';
import { SoundAffirmative } from '../globals/Globals';
import { StartScreenComponent } from './screens/start-screen/StartScreenComponent';
import PlayerCreationScreenComponent from './screens/player-creation-screen/PlayerCreationScreenContainer';
import './GameApp.less';

type GameAppProps = PropsState & DispatchState;

class GameApp extends React.Component<GameAppProps> {
   render() {
      const { gameStatus, setGameStatus } = this.props;

      return (
         <div id="game-app">
            {gameStatus === GameStatus.WELCOME && (
               <StartScreenComponent
                  onStart={() => {
                     new Audio(SoundAffirmative).play();
                     setGameStatus(GameStatus.PLAYER_CREATION);
                  }}
               />
            )}

            {gameStatus === GameStatus.PLAYER_CREATION && (
               <PlayerCreationScreenComponent/>
            )}
         </div>
      );
   }
}

interface PropsState {
   gameStatus: GameStatus
}

const mapStateToProps = (state: GameAppStore): PropsState => ({
   gameStatus: state.gameReducer.status
});

interface DispatchState {
   setGameStatus: (status: GameStatus) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchState => ({
   setGameStatus: (status: GameStatus) => dispatch(setStatusActionCreator(status))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(GameApp);