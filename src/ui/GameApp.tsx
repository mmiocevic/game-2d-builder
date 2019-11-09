import React from 'react';
import { StartScreenComponent } from './screens/start-screen/StartScreenComponent';
import PlayerCreationScreenComponent from './screens/player-creation-screen/PlayerCreationScreenContainer';
import './GameApp.less';

export const GameApp = () => {
   const [ gameStarted, setGameStarted ] = React.useState(false);

   return (
      <div id="game-app">
         {!gameStarted && (
            <StartScreenComponent onStart={() => setGameStarted(true)}/>
         )}
         {gameStarted && (
            <PlayerCreationScreenComponent/>
         )}
      </div>
   );
};