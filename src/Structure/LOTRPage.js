import React from 'react';
import LOTRHeader from './LOTRHeader';
import LOTRContent from './LOTRContent';
import LOTRFooter from './LOTRFooter';
import { Grid } from '@material-ui/core';

const LOTRPage = ({ children }) => {
  return (
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
  );
};

export default LOTRPage;
