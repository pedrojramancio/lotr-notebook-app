import instance from './config';

export const getCharactersName = name => {
  return instance.get(`characters/name/${name}`).then(res => res.data);
};
