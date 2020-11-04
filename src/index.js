import './polyfills';

import React from 'react';
import ReactDOM from 'react-dom';

import cardsData from './data/cards-data.json';
import './styles/main.scss';

import App from "./components/app/app";

//- import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

const initApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App cardsData={cardsData}/>
    </React.StrictMode>,
    rootElement
  );
};

initApp();

// reportWebVitals();
