import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

const middleware = [thunk, ReduxPromise];

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(...middleware)),
);

export default store;
