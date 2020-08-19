import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
}));
const LOTRHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" className={classes.title}>
            LOTR Note Book Application
          </Typography>

          <Button variant="contained" className={classes.menuButton}>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="contained" className={classes.menuButton}>
            <Link to="/Books">Books</Link>
          </Button>
          <Button variant="contained" className={classes.menuButton}>
            <Link to="/Movies">Movies</Link>
          </Button>
          <Button variant="contained" className={classes.menuButton}>
            <Link to="/Characters">Characters</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default LOTRHeader;
