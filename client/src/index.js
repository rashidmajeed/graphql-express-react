import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const rootEl = document.getElementById('root');
let render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, rootEl)
}
if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render)
  })
}

render();

registerServiceWorker();