import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LOTRPage from '../../Structure/LOTRPage';
import PanoramaFishEyeTwoTone from '@material-ui/icons/PanoramaFishEyeTwoTone';
import PanoramaFishEye from '@material-ui/icons/PanoramaFishEye';
import * as API from '../../api/booksApi';
import Badge from '@material-ui/core/Badge';
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus';
import { Link } from 'react-router-dom';

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

const ringsCount = count => {
  let rings = [];
  let i = 0;
  for (; i < count; i++) {
    rings.push(<PanoramaFishEyeTwoTone />);
  }
  for (; i < 5; i++) {
    rings.push(<PanoramaFishEye />);
  }
  return rings;
};

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.getBooks().then(result => setBooks(result));
  }, []);

  const classes = useStyles();
  return (
    <LOTRPage>
      {books &&
        books.map(book => {
          return (
            <Card key={book._id} variant="outlined" className={classes.root}>
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
                    <Typography className={classes.pos} color="textSecondary">
                      1st Review
                    </Typography>
                    {ringsCount(book.reviewCount)}
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
          );
        })}
    </LOTRPage>
  );
};

export default BooksPage;
