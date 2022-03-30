import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyles } from './global-styles';

ReactDOM.render(
  <>
    <App />
    <GlobalStyles />
  </>,
  document.getElementById('root')
);

