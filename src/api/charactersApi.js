import instance from './config';

export const getCharactersName = name => {
  return instance.get(`characters/name/${name}`).then(res => res.data);
};

export const getCharacterDetails = id => {
  return instance.get(`characters/${id}`).then(res => res.data);
};
