import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const LOTRHeader = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={12} xl={12}>
      <Paper className={classes.paper}>LOTR Note Book Application</Paper>
      <Button variant="contained" color="primary" href="#contained-buttons">
        <Link to="/">Home</Link>
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        <Link to="/Books">Books</Link>
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        <Link to="/Movies">Movies</Link>
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        <Link to="/Characters">Characters</Link>
      </Button>
    </Grid>
  );
};

export default LOTRHeader;
