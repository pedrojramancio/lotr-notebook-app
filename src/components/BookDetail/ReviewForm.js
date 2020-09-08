import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ReviewForm = (currentReview, toggleShowForm) => {
  const classes = useStyles();
  const [reviewId, setReviewId] = useState(currentReview._id);
  const [author, setAuthor] = useState(currentReview.author);
  const [stars, setStars] = useState(currentReview.stars);
  const [text, setText] = useState(currentReview.text);
  const [bookId, setBookId] = useState(currentReview.bookId);

  const handleChangeStars = event => {
    const stars = parseInt(event.target.value);
    if (stars >= 1 && stars <= 5) {
      setStars(stars);
    }
    return;
  };

  const handleChange = callback => event => {
    callback(event.target.value);
  };

  const submitReview = event => {
    event.preventDefault();

    if (!reviewId) {
      alert('adicionar Reveiw');
    } else {
      alert('updater Reveiw');
    }
    // dispatch(ReduxActions.loadBooksThunk());
    toggleShowForm();
    cleanForm();
  };

  // const createReview = () => {
  //   cleanForm();
  //   if (!showForm) {
  //     toggleShowForm();
  //   }
  // };

  // const updateReview = (bookId, reviewId, author, stars, text) => {
  //   if (showForm === false) {
  //     toggleShowForm();
  //   }
  //   setReviewId(reviewId);
  //   setAuthor(author);
  //   handleChangeStars(stars);
  //   setText(text);
  // };

  const cleanForm = () => {
    setReviewId('');
    setAuthor('');
    setStars(0);
    setText('');
  };

  return (
    <Box component="span" xs={1}>
      <form onSubmit={submitReview}>
        <Typography variant="body1" component="div">
          review id: {reviewId}
        </Typography>
        <Typography variant="body1" component="div">
          <label>Autor: </label>
          <input
            required={true}
            type="text"
            value={author}
            onChange={handleChange(setAuthor)}
          ></input>
        </Typography>
        <Typography variant="body1" component="div">
          Starts:
          <Rating
            name="simple-controlled"
            value={stars}
            onChange={(event, newValue) => {
              setStars(newValue);
            }}
          />
        </Typography>
        <Typography variant="body1" component="div">
          <label>Text: </label>
          <textarea
            required={true}
            value={text}
            onChange={handleChange(setText)}
          ></textarea>
        </Typography>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
          type="submit"
        >
          Send
        </Button>
      </form>
    </Box>
  );
};

export default ReviewForm;
