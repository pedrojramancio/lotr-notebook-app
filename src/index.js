import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { STORE } from './config/ReduxStoreConfig';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={STORE}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
