import App from '@/App';
import SessionDataStorage from '@/context/sessionDataStorage';
import { setupStore } from '@/store/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SessionDataStorage>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SessionDataStorage>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
