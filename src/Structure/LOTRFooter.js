import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const LOTRFooter = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={12} xl={12}>
      <Paper className={classes.paper}>LOTRFooter</Paper>
    </Grid>
  );
};

export default LOTRFooter;
