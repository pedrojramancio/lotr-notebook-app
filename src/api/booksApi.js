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

export const updateBookReview = (bookId, reviewId, { author, stars, text }) => {
  return instance
    .put(`books/${bookId}/reviews/${reviewId}`, { author, stars, text })
    .then(res => res.data);
};

export const removeBookReview = (bookId, reviewId) => {
  return instance
    .delete(`books/${bookId}/reviews/${reviewId}`)
    .then(res => res.data);
};
