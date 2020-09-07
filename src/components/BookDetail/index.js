import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import LOTRPage from '../../Structure/LOTRPage';
import * as API from '../../api/booksApi';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import GreatTable from './GreatTable';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [rows, setRows] = useState([]);

  useEffect(() => {
    API.getBookDetail(id).then(returnedBook => {
      setBook(returnedBook);
      setRows(returnedBook.reviews);
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
      <GreatTable rows={rows} />
    </LOTRPage>
  );
};

export default BookDetailPage;
