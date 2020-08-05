import * as CharacterAPI from '../api/charactersApi';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadCharacters } from '../actionCreators/CharactersAction';

const CharactersPaginatedList = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.CharacterState);
  const characters = store.characters;
  const limit = store.limit;
  const page = store.page;
  const total = store.total;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [page, limit, dispatch]);

  function getPageAndSetVars(newPage, newlimit) {
    CharacterAPI.getCharactersPaginated(newPage, newlimit).then(chars => {
      dispatch(
        loadCharacters(chars.data, chars.page, chars.total, chars.limit)
      );
      setLoading(false);
    });
  }

  const handlePageChange = newPage => {
    if (newPage < 0) {
      alert('Limite inferior da paginação atingido!');
      return;
    } else if (newPage >= total / limit) {
      alert('Limite superior da paginação atingido!');
      return;
    } else {
      setLoading(true);
      getPageAndSetVars(newPage, limit);
    }
  };
  const handleLimitChange = newLimit => {
    if (newLimit <= 0 || newLimit > 1000 || newLimit > total) {
      alert('Os limites da página vão de 1 a 1000, ou até o total de itens!');
      return;
    } else {
      setLoading(true);
      getPageAndSetVars(page, newLimit);
    }
  };

  return !loading ? (
    <>
      <hr />
      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={event => handlePageChange(page - 1)}>
                {' '}
                &lt;&lt;{' '}
              </button>
            </td>
            <td>
              <select
                value={limit}
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
              <button onClick={event => handlePageChange(page + 1)}>
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
          <span>{page + 1} </span>
          <label>total: </label>
          <span>{total} </span>
          <label>limit: </label>
          <span>{limit} </span>
        </div>
      </div>
      <hr />
      {characters && (
        <ol>
          {characters.map(char => (
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
