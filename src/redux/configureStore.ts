import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const logger: any = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});

export default function configureStore(preloadedStore?: any) {
  return createStore(reducers, preloadedStore, applyMiddleware(thunk, logger));
}
