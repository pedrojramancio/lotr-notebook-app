import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import LOTRPage from '../Structure/LOTRPage';
import MaterialTable from 'material-table';
import * as API from './booksApi';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const BookDetailPage = () => {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Author', field: 'author' },
      { title: 'Text', field: 'text' },
      {
        title: 'Stars',
        field: 'stars',
        lookup: { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
      },
    ],
    data: [],
  });
  const { id } = useParams();
  const [book, setBook] = useState({});
  const addReview = review => {
    API.addBookReview(book._id, {
      author: review.author,
      stars: review.stars,
      text: review.text,
    }).then(returnedReview => {
      console.log('returnedReview', returnedReview);
    });
  };
  const updateReview = () => {
    //export const updateBookReview = (bookId, reviewId, { author, stars, text }) => {
  };
  const removeReview = () => {
    //export const removeBookReview = (bookId, reviewId) => {
  };

  useEffect(() => {
    API.getBookDetail(id).then(returnedBook => {
      setBook(returnedBook);
    });
  }, [id]);

  return (
    <LOTRPage>
      <Typography variant="h4" gutterBottom>
        <Badge badgeContent={book.reviewCount} color="primary">
          <MenuBookIcon />
        </Badge>
        {book.name}
      </Typography>
      <MaterialTable
        title="Reviews"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  console.log('data', data);
                  addReview(data);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </LOTRPage>
  );
};

export default BookDetailPage;
