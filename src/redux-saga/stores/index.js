import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(saga, logger))
);

saga.run(rootSaga);

export default store;