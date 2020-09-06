import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LOTRPage from '../../Structure/LOTRPage';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primaty,
  },
}));

const MoviesPage = () => {
  const classes = useStyles();
  return (
    <LOTRPage>
      <Paper className={classes.paper}>Movies Page</Paper>
    </LOTRPage>
  );
};

export default MoviesPage;
