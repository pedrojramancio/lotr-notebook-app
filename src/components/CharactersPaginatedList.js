import React from 'react';
import * as CharacterAPI from '../api/charactersApi';
import { useSelector, useDispatch } from 'react-redux';
import { loadCharacters, setLoading } from '../actionCreators/CharactersAction';

const CharactersPaginatedList = () => {
  const dispatch = useDispatch();
  const characterState = useSelector(state => state.CharacterState);

  function getNewPage(newPage, newlimit) {
    CharacterAPI.getCharactersPaginated(newPage, newlimit).then(chars => {
      dispatch(
        loadCharacters(chars.data, chars.page, chars.total, chars.limit, false)
      );
    });
  }

  const handlePageChange = newPage => {
    if (newPage < 0) {
      alert('Limite inferior da paginação atingido!');
      return;
    } else if (newPage >= characterState.total / characterState.limit) {
      alert('Limite superior da paginação atingido!');
      return;
    } else {
      dispatch(setLoading(true));
      getNewPage(newPage, characterState.limit);
    }
  };
  const handleLimitChange = newLimit => {
    if (newLimit <= 0 || newLimit > 1000 || newLimit > characterState.total) {
      alert('Os limites da página vão de 1 a 1000, ou até o total de itens!');
      return;
    } else {
      dispatch(setLoading(true));
      getNewPage(characterState.page, newLimit);
    }
  };

  return !characterState.loading ? (
    <>
      <hr />
      <table>
        <tbody>
          <tr>
            <td>
              <button
                onClick={event => handlePageChange(characterState.page - 1)}
              >
                {' '}
                &lt;&lt;{' '}
              </button>
            </td>
            <td>
              <select
                value={characterState.limit}
                name="Limit"
                onChange={event => handleLimitChange(event.target.value)}
              >
                <option value="10" key="1">
                  10
                </option>
                <option value="20" key="2">
                  20
                </option>
                <option value="50" key="3">
                  50
                </option>
                <option value="500" key="4">
                  500
                </option>
              </select>
            </td>
            <td>
              <button
                onClick={event => handlePageChange(characterState.page + 1)}
              >
                {' '}
                &gt;&gt;{' '}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <div>
          <label>page: </label>
          <span>{characterState.page + 1} </span>
          <label>total: </label>
          <span>{characterState.total} </span>
          <label>limit: </label>
          <span>{characterState.limit} </span>
        </div>
      </div>
      <hr />
      {characterState.characters && (
        <ol>
          {characterState.characters.map(char => (
            <li key={char._id}>{char.name}</li>
          ))}
        </ol>
      )}
    </>
  ) : (
    <div>Recuperando lista paginada de personagens</div>
  );
};

export default CharactersPaginatedList;
