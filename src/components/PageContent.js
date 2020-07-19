import React from 'react';
import { useLocation } from 'react-router-dom';

const PageContent = ({ name, children }) => {
  const { pathname } = useLocation();

  return (
    <div>
      <div>
        <strong>notebook app / {name}</strong>
      </div>
      <div>
        <strong>pathname: {pathname}</strong>
      </div>
      {children}
    </div>
  );
};

export default PageContent;
