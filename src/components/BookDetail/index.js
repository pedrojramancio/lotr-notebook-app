import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import LOTRPage from '../../Structure/LOTRPage';
import * as API from '../../api/booksApi';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

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
    </LOTRPage>
  );
};

export default BookDetailPage;
