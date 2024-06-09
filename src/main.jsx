import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Slide, ToastContainer } from 'react-toastify';
import App from './App';
import './index.css';
import store from './components/states';
import 'react-toastify/dist/ReactToastify.css';
import { SearchProvider } from './components/context/SearchContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <SearchProvider>
        <App />
        <ToastContainer
          autoClose={2000}
          position="top-right"
          transition={Slide}
          closeOnClick
        />
      </SearchProvider>
    </Provider>
  </React.StrictMode>,
);
