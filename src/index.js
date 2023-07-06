import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// import necessari alla creazione di uno store di redux toolkit
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import dei nostri reducers
import booksReducer from './states/booksState';
import commentsFromBookReducer from './states/getComments';
import deleteCommentFromBookReducer from './states/deleteComments';

const reducer = combineReducers({
  bookState: booksReducer,
  commentFromBookState: commentsFromBookReducer,
  deleteCommentFromBook: deleteCommentFromBookReducer
});

const store = configureStore({
  reducer,
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);