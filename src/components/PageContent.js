import React from 'react';
import { useLocation } from 'react-router-dom';

const PageContent = ({ name, children }) => {
  const { pathname } = useLocation();

  return (
    <div>
      <div className="page-title">
        <h3>The Lord of The Rings</h3>
        <h4>
          notebook app / {name}
          <br />
          pathname: {pathname}
        </h4>
      </div>
      {children}
    </div>
  );
};

export default PageContent;
