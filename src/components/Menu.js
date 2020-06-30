import React from 'react';

const Menu = () => {
  return (
    <div className="menu">
      <h3>Menu</h3>
      <ul className="menu-items">
        <li className="menu-item">
          <a href="/">Home</a>
        </li>
        <li className="menu-item">
          <a href="/movies">Movies</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
