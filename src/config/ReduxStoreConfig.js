import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import BookReducer from '../components/Book/reducer';
import BookDetailReducer from '../components/BookDetail/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const STORE = createStore(
  combineReducers({
    BooksState: BookReducer,
    BookDetailState: BookDetailReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
