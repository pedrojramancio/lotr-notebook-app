import React from 'react';
import HomePage from './pages/HomePage';
import LOTRRouter from './config/LOTRRouter';

const App = () => {
  return (
    <>
      <LOTRRouter />;
      <HomePage />;
    </>
  );
};

export default App;
