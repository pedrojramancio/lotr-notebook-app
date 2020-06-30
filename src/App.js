import React from 'react';
import Menu from './components/Menu';
import DumbRouter from './components/DumbRouter';

const App = () => {
  return (
    <div className="app">
      <Menu />
      <DumbRouter />
    </div>
  );
};

export default App;
