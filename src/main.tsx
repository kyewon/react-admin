import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { configureStore } from 'app/store';
import {  MainApp } from 'app/containers';
// import { hot } from 'react-hot-loader';
// import reportWebVitals from './reportWebVitals';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <h1>hi!</h1>
        <Route exact path="/" component={MainApp} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// reportWebVitals();
