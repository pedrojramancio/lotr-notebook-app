import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LOTRPage from '../../Structure/LOTRPage';
import Badge from '@material-ui/core/Badge';
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import RingRate from './RingRate';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const BooksPage = () => {
  const books = useSelector(state => state.BookState);

  const classes = useStyles();
  return (
    <LOTRPage>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="stretch"
        spacing={1}
      >
        {books &&
          books.map(book => {
            return (
              <Grid item key={book._id}>
                <Card variant="outlined" className={classes.root}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Book
                      <Badge badgeContent={book.reviewCount} color="primary">
                        <Filter9PlusIcon />
                      </Badge>
                    </Typography>

                    <Typography variant="h5" component="h2">
                      {book.name}
                    </Typography>
                    {book._id}
                    {book.reviewCount > 0 ? (
                      <>
                        <Typography
                          className={classes.pos}
                          color="textSecondary"
                        >
                          1st Review
                        </Typography>
                        <RingRate value={book.reviewCount} />

                        <Typography variant="body2" component="p">
                          {book.reviews[0].text}
                        </Typography>
                      </>
                    ) : (
                      <Typography variant="body2" component="p">
                        No riviews
                      </Typography>
                    )}
                  </CardContent>
                  <CardActions>
                    <Link to={'/books/' + book._id}>
                      <Button size="small" variant="contained">
                        Update Reviews
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </LOTRPage>
  );
};

export default BooksPage;
