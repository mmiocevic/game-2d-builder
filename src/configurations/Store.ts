import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { PlayerReducer, PlayerReducerState } from '../domain/player/PlayerReducer';

const sagaMiddleware = createSagaMiddleware();

export interface GameAppStore {
   playerReducer: PlayerReducerState
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
   combineReducers({
      playerReducer: PlayerReducer
   }),
   composeEnhancers(
      applyMiddleware(sagaMiddleware)
   )
);

// sagaMiddleware.run()