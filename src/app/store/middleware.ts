import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

let applyMiddlewares: any
if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger');
  const invariant = require('redux-immutable-state-invariant').default;
  
  middleware.push(invariant());
  middleware.push(createLogger({ collapsed: true }));
  applyMiddlewares = composeWithDevTools(applyMiddleware(...middleware))
} else {
  applyMiddlewares = applyMiddleware(...middleware)
}

export default applyMiddlewares