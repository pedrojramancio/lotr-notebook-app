import React from 'react';
import PageContent from '../components/PageContent';
import { Debounce } from 'react-throttle';
import { getCharactersName } from '../api/charactersApi';

class CharactersPage extends React.Component {
  state = { name: '', characters: [] };

  searchCharacters(name) {
    console.log('Procurando por: ', name);
    getCharactersName(name).then(characters => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;
    return (
      <PageContent name="Characters">
        <div>
          <label>Search for character's name:</label>
          <Debounce time="400" handler="onChange">
            <input
              name="name"
              type="text"
              required={true}
              onChange={event => this.searchCharacters(event.target.value)}
            ></input>
          </Debounce>
          <div>
            <ol>
              {characters.map(character => (
                <li key={character._id}> {character.name}</li>
              ))}
            </ol>
          </div>
        </div>
      </PageContent>
    );
  }
}

export default CharactersPage;
