import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import '../styles.css';
import App from './App.tsx';
import { appStore } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
