import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

const LOTRFooter = () => {
  const classes = useStyles();

  return <Paper className={classes.paper}>LOTRFooter</Paper>;
};

export default LOTRFooter;
