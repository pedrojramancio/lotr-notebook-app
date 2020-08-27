import React, { useState, useEffect } from 'react';
import LOTRPage from '../Structure/LOTRPage';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import * as API from './charactersApi';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CharactersPage = () => {
  const classes = useStyles();
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    API.getCharactersPaginated(page, limit).then(result => {
      setCharacters(result.data);
      setTotal(result.total);
    });
  }, [page, limit]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <LOTRPage>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Race</TableCell>
              <TableCell align="right">Realm</TableCell>
              <TableCell align="right">Birth</TableCell>
              <TableCell align="right">Death</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {characters.map(char => (
              <TableRow key={char._id}>
                <TableCell component="th" scope="char">
                  {char.Name}
                </TableCell>
                <TableCell align="right">{char.race}</TableCell>
                <TableCell align="right">{char.realm}</TableCell>
                <TableCell align="right">{char.birth}</TableCell>
                <TableCell align="right">{char.death}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={total}
        rowsPerPage={limit}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </LOTRPage>
  );
};

export default CharactersPage;
