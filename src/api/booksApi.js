import instance from './config';

export const getBooks = () => {
  return instance.get('books').then(res => res.data);
};

export const getBookDetail = id => {
  return instance.get(`books/${id}`).then(res => res.data);
};

export const addBookReview = (bookId, { author, stars, text }) => {
  return instance
    .post(`books/${bookId}/reviews`, { author, stars, text })
    .then(res => res.data);
};
