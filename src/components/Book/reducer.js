import { LOAD_BOOKS } from './actions';

export default function books(state = [], action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.books;

    default:
      return state;
  }
}
