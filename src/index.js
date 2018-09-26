import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Component/>
    </HashRouter>,
    document.getElementById('react-app-root'),
  );
};

render(App);
