import instance from '../api/config';

export const getCharactersName = name => {
  return instance.get(`characters/name/${name}`).then(res => res.data);
};

export const getCharacterDetails = id => {
  return instance.get(`characters/${id}`).then(res => res.data);
};

export const getCharactersPaginated = (page, limit) => {
  return instance
    .get(`characters?page=${page}&limit=${limit}`)
    .then(res => res.data);
};
