const { LOAD_BOOKS } = require('../actionCreators/actionCreators');

export default function books(state = [], action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.books;
    default:
      return state;
  }
}
