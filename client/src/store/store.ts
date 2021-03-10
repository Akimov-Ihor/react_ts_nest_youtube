import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { rootReducer } from './reducers/root.reducer';

const initialState = {};

const enhancers = [devToolsEnhancer({})];

const middleware = [thunk];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export const store = (function configureStore() {
  const reduxStore = createStore(
    rootReducer,
    initialState,
    composedEnhancers as any,
  );
  // reduxStore.dispatch(verifyAuth());
  return reduxStore;
}());
