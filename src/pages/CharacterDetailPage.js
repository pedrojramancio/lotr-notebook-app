import React, { useState, useEffect } from 'react';
import PageContent from '../components/PageContent';
import { useParams } from 'react-router';
import { getCharacterDetails } from '../api/charactersApi';

const CharacterDeailPage = () => {
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();
  const [character, setCharacter] = useState('');

  useEffect(() => {
    getCharacterDetails(id)
      .then(char => setCharacter(char))
      .finally(() => setLoaded(true));
  }, [id]);

  return (
    <PageContent name="Character Detail">
      {character._id ? (
        <div>
          <h1>Detalhes do personagem: {id}</h1>
          <div>name: {character.name}</div>
          <div>height: {character.height}</div>
          <div>race: {character.race}</div>
          <div>gender: {character.gender}</div>
          <div>birth: {character.birth}</div>
          <div>spouse: {character.spouse}</div>
          <div>death: {character.death}</div>
          <div>realm: {character.realm}</div>
          <div>hair: {character.hair}</div>
          <div>wikiUrl: {character.wikiUrl}</div>
        </div>
      ) : (
        loaded && <div>Não encontrei esse personagem</div>
      )}
    </PageContent>
  );
};

export default CharacterDeailPage;
