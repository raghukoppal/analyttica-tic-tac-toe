import React from 'react';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { players } from './services/players/reducer';

const middleware = [thunk];

const store = createStore(
  players,
  {
    players: [
      { id: 'player1', name: '', playerIcon: 'X', winCount: 0, active: true },
      { id: 'player2', name: '', playerIcon: 'O', winCount: 0, active: false },
    ],
  },
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const Root = ({ children }) => <Provider store={store}>{children}</Provider>;

export default Root;
