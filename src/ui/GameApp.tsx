import React from 'react';
import { GameAppStore } from '../configurations/Store';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setStatusActionCreator } from '../domain/game/GameActionCreators';
import { GameStatus } from '../domain/game/GameActionTypes';
import PlayerCreationScreenComponent from './screens/player-creation-screen/PlayerCreationScreenContainer';
import { StartScreenComponent } from './screens/start-screen/StartScreenComponent';
import { Anim } from './__internal__/anim/Anim';
import './GameApp.less';

type GameAppProps = PropsState & DispatchState;

class GameApp extends React.Component<GameAppProps> {
   render() {
      const { gameStatus, setGameStatus } = this.props;

      return (
         <div id="game-app">
            {gameStatus === GameStatus.WELCOME && (
               <StartScreenComponent onStart={() => setGameStatus(GameStatus.PLAYER_CREATION)}/>
            )}

            <Anim
               showWhen={gameStatus === GameStatus.PLAYER_CREATION}
            >
               <PlayerCreationScreenComponent/>
            </Anim>
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