import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LOTRPage from '../Structure/LOTRPage';
import PanoramaFishEyeTwoTone from '@material-ui/icons/PanoramaFishEyeTwoTone';
import PanoramaFishEye from '@material-ui/icons/PanoramaFishEye';
import * as API from './booksApi';
import Badge from '@material-ui/core/Badge';
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

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

const books_local = [
  {
    _id: '111',
    name: 'Fellowship of the Ring',
    reviewCount: 3,
    reviews: [
      {
        _id: '1111',
        author: 'Pedro Jr.',
        text: 'Very good',
        stars: 4,
        bookID: '111',
      },
      {
        _id: '1112',
        author: 'Sergio',
        text: 'Liked it',
        stars: 3,
        bookID: '111',
      },
      {
        _id: '1113',
        author: 'Cláudio',
        text: 'Loved it!',
        stars: 5,
        bookID: '111',
      },
    ],
  },
  {
    _id: '222',
    name: 'The Two Towers',
    reviewCount: 1,
    reviews: [
      {
        _id: '222-1',
        author: 'Pedro Jr.',
        text: 'I didn´t like it.',
        stars: 1,
        bookID: '222',
      },
    ],
  },
  {
    _id: '333',
    name: 'Silmarillion',
    reviewCount: 0,
    reviews: [],
  },
];

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  useEffect(() => {
    API.getBooks().then(result => {
      setBooks(result.data);
      console.log(result);
    });
  }, []);

  const classes = useStyles();
  return (
    <LOTRPage>
      {books_local &&
        books_local.map(book => {
          return (
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
              {book.reviewCount > 0 ? (
                <CardActions>
                  <Button size="small" onClick={handleClickOpen}>
                    List Reviews
                  </Button>
                  <SimpleDialog
                    selectedValue={selectedValue}
                    open={open}
                    onClose={handleClose}
                    reviews={book.reviews}
                  />
                </CardActions>
              ) : (
                <></>
              )}
            </Card>
          );
        })}
    </LOTRPage>
  );
};

export default BooksPage;

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open, reviews } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Reviews</DialogTitle>
      <List>
        {reviews.map(review => (
          <ListItem
            button
            onClick={() => handleListItemClick(review)}
            key={review._id}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <EventNoteIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={review.text} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <EventNoteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  reviews: PropTypes.array.isRequired,
};
