import { createStore and applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';

const logger = createlogger();

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
