import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primaty,
  },
}));

const LOTRContent = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={12} xl={12}>
      <Paper className={classes.paper}>children</Paper>
    </Grid>
  );
};

export default LOTRContent;
