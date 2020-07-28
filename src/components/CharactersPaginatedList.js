import { getCharactersPaginated } from '../api/charactersApi';
import React, { useEffect, useState } from 'react';

const CharactersPaginatedList = () => {
  const [characters, setCharacters] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharactersPaginated(0, 10).then(p => {
      setCharacters(p.data);
      setLimit(p.limit);
      setPage(p.page);
      setTotal(p.total);
      setLoading(false);
    });
  }, []);

  function getPageAndSetVars(newPage, newlimit) {
    getCharactersPaginated(newPage, newlimit).then(p => {
      setCharacters(p.data);
      setLimit(p.limit);
      setPage(p.page);
      setTotal(p.total);
      setLoading(false);
    });
  }

  const handlePaginationChange = (newPage, newLimit) => {
    const oldLimit = limit;
    setLimit(newLimit);
    console.log('nova Página: ', newPage);
    console.log('novo limite: ', newLimit);
    console.log('total / limit: ', total / limit);
    if (newPage < 0) {
      alert('Limite inferior da paginação atingido!');
      setLimit(oldLimit);
      return;
    } else if (newPage >= total / limit) {
      alert('Limite superior da paginação atingido!');
      setLimit(oldLimit);
      return;
    } else if (newLimit <= 0 || newLimit > 1000 || newLimit > total) {
      alert('Os limites da página vão de 1 a 1000, ou até o total de itens!');
      setLimit(oldLimit);
      return;
    } else {
      setLoading(true);
      getPageAndSetVars(newPage, newLimit);
    }
  };

  return !loading ? (
    <>
      <hr />
      <table>
        <tbody>
          <tr>
            <td>
              <button
                onClick={event => handlePaginationChange(page - 1, limit)}
              >
                {' '}
                &lt;&lt;{' '}
              </button>
            </td>
            <td>
              <select
                value={limit}
                name="Limit"
                onChange={event =>
                  handlePaginationChange(page, event.target.value)
                }
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
                onClick={event => handlePaginationChange(page + 1, limit)}
              >
                {' '}
                &gt;&gt;{' '}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      {characters && (
        <ol>
          {characters.map(char => (
            <li key={char._id}>{char.name}</li>
          ))}
        </ol>
      )}
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
    </>
  ) : (
    <div>Recuperando lista paginada de personagens</div>
  );
};

export default CharactersPaginatedList;
