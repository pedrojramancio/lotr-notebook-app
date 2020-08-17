import React from 'react';
import LOTRHeader from './LOTRHeader';
import LOTRContent from './LOTRContent';
import LOTRFooter from './LOTRFooter';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));
const LOTRPage = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={3}
      >
        <LOTRHeader />
        <LOTRContent>children</LOTRContent>
        <LOTRFooter />
      </Grid>
    </div>
  );
};

export default LOTRPage;
