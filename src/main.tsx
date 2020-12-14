import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { configureStore } from 'app/store';
import { MainApp } from 'app/containers'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
          <Route exact path="/" component={MainApp} />
          {/* Not Found */}
          <Route component={() => <Redirect to="/" />} />
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// reportWebVitals();
