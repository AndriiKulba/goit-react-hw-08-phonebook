import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={store.persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
