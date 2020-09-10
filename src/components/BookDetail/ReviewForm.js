import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import * as ReduxActions from './actions';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  div: {
    backgroundColor: 'yellow',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const ReviewForm = ({ currentReview, toggleShowForm }) => {
  const classes = useStyles();
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');
  const [reviewId, setReviewId] = useState(currentReview._id);
  const [author, setAuthor] = useState(currentReview.author);
  const [stars, setStars] = useState(currentReview.stars);
  const [text, setText] = useState(currentReview.text);
  const [bookId, setBookId] = useState(currentReview.bookId);
  const dispatch = useDispatch();
  const handleChange = callback => event => {
    callback(event.target.value);
  };

  const validateStars = value => {
    return value < 1 || value > 5 ? false : true;
  };

  const submitReview = event => {
    event.preventDefault();

    if (!validateStars(stars)) {
      setHelperText('Invalid stars!');
      setError(true);
      return;
    } else {
      if (!reviewId) {
        dispatch(
          ReduxActions.addReviewThunk({
            bookId,
            author,
            stars,
            text,
          })
        );
      } else {
        alert('update Revview');
      }
      toggleShowForm();
      cleanForm();
    }
  };

  const cleanForm = () => {
    setReviewId('');
    setAuthor('');
    setStars(0);
    setText('');
  };

  return (
    <div className={classes.div}>
      <form onSubmit={submitReview}>
        <FormControl
          component="fieldset"
          error={error}
          className={classes.formControl}
        >
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Typography variant="subtitle2">Review id:</Typography> {reviewId}
              <Typography variant="subtitle2">Book id:</Typography> {bookId}
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle2">Autor: </Typography>
              <input
                required={true}
                type="text"
                value={author}
                onChange={handleChange(setAuthor)}
              ></input>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle2">Starts: </Typography>
              <Rating
                name="simple-controlled"
                value={stars}
                onChange={(event, newValue) => {
                  setStars(newValue);
                }}
              />
              <FormHelperText>{helperText}</FormHelperText>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle2">Text: </Typography>
              <textarea
                required={true}
                value={text}
                onChange={handleChange(setText)}
              ></textarea>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<AddIcon />}
                type="submit"
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </form>
    </div>
  );
};

export default ReviewForm;
