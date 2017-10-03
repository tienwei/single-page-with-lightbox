import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';

const initState = { modalActive: false };
let middlewares = [];

// Add a logger in development mode
const NODE_ENV = process.env.NODE_ENV || 'development';
if (NODE_ENV === 'development') {
  middlewares.push(logger);
}

const enhancers = [
  applyMiddleware(...middlewares)
];

const store = createStore(
  reducers,
  initState,
  compose(...enhancers)
);

export default store;
