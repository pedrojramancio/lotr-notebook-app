import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from '../reducers/IndexReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const STORE = createStore(
  combineReducers,
  composeEnhancers(applyMiddleware(thunk))
);
