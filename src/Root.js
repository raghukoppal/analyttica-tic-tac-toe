import React from 'react';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { players, playSquares } from './services/players/reducer';

const middleware = [thunk];

const rootreducers = combineReducers({
  players,
  playSquares,
});

const store = createStore(
  rootreducers,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const Root = ({ children }) => <Provider store={store}>{children}</Provider>;

export default Root;
