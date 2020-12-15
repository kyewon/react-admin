import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { configureStore } from 'app/store';
import { MainApp } from 'app/containers'
import { Home } from 'app/components'
import { HelmetProvider } from 'react-helmet-async';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <Router>
        <Switch>
            <Route exact path="/main" component={MainApp} />
            <Route exact path="/" component={Home} />
            {/* Not Found */}
            <Route component={() => <Redirect to="/" />} />
          </Switch>
      </Router>
    </HelmetProvider>
  </Provider>,
  document.getElementById('root')
);

// reportWebVitals();
