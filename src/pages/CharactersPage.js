import React, { useState } from 'react';
import PageContent from '../components/PageContent';
import { Debounce } from 'react-throttle';
import { getCharactersName } from '../api/charactersApi';
import { Link } from 'react-router-dom';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  const searchCharacters = name => {
    getCharactersName(name).then(characters => setCharacters(characters));
  };

  return (
    <PageContent name="Characters">
      <div>
        <label>Search for character's name:</label>
        <Debounce time="400" handler="onChange">
          <input
            name="name"
            type="text"
            required={true}
            onChange={event => searchCharacters(event.target.value)}
          ></input>
        </Debounce>
        <div>
          <ol>
            {characters.map(character => (
              <Link to={'/character/' + character._id} key={character._id}>
                <li> {character.name}</li>
              </Link>
            ))}
          </ol>
        </div>
      </div>
    </PageContent>
  );
};

export default CharactersPage;
