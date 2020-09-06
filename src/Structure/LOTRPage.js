import React from 'react';
import LOTRHeader from './LOTRHeader';
import LOTRFooter from './LOTRFooter';
import { Grid } from '@material-ui/core';

const LOTRPage = ({ children }) => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12}>
        <LOTRHeader />
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
      <Grid item xs={12}>
        <LOTRFooter />
      </Grid>
    </Grid>
  );
};

export default LOTRPage;
