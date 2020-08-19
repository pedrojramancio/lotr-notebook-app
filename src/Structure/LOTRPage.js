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
        <Grid item xs={12}>
          <LOTRHeader />
        </Grid>
        <Grid item xs={12}>
          <LOTRContent>{children}</LOTRContent>
        </Grid>
        <Grid item xs={12}>
          <LOTRFooter />
        </Grid>
      </Grid>
    </div>
  );
};

export default LOTRPage;
