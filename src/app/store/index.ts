import { createStore, Store } from 'redux';
import { IRootState, rootReducer } from 'app/reducers';
import applyMiddlewares from './middleware';
// import rootSaga from 'sagas/index';

export function configureStore(initialState?: IRootState): Store<IRootState> {

  const store = createStore(rootReducer as any, initialState as any, applyMiddlewares) as Store<IRootState>;
  // sagaMiddleware.run(rootSaga)
  
  if (module.hot) {
    module.hot.accept('app/reducers', () => {
      const nextReducer = require('app/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}