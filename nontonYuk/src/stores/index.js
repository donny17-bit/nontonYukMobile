import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  blacklist: ['signup'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware, logger),
);
let persistor = persistStore(store);

export default {store, persistor};
