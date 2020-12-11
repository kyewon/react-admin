import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { configureStore } from 'app/store';
import { MainApp } from 'app/containers'
import Top from 'app/components/Features/Top';
import Page1 from 'app/components/Features/Page1';
import Page2 from 'app/components/Features/Page2';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <h1>main.tsx</h1>
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={MainApp} />
            <Route exact path="/top" component={Top} />
            <Route exact path="/page1" component={Page1} />
            <Route exact path="/page2" component={Page2} />
            {/* Not Found */}
            <Route component={() => <Redirect to="/" />} />
          </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// reportWebVitals();
