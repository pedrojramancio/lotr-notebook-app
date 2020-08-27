import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LOTRPage from '../Structure/LOTRPage';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primaty,
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <LOTRPage>
      <Paper className={classes.paper}>HOME</Paper>
    </LOTRPage>
  );
};

export default HomePage;
