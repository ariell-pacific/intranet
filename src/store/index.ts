import {
  createStore,
  combineReducers,
  applyMiddleware,
  AnyAction
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
// @ts-ignore
import expireReducer from 'redux-persist-expire';
import storage from 'redux-persist/lib/storage';
import thunk, { ThunkAction } from 'redux-thunk';
import systemReducers from './system/reducers';
import linksReducer from './links/reducer'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['system', 'article'],
  transform: [
    expireReducer('session', {
      expireSeconds: 3599,
      expiredState: {},
      autoExpire: true
    })
  ]
};

const rootReducer = combineReducers({
  system: persistReducer(rootPersistConfig, systemReducers),
  links: linksReducer,
});

const middleware = [thunk];
const middlewareEnchancer = applyMiddleware(...middleware);
export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
export const store =
  process.env.NODE_ENV === 'development'
    ? createStore(persistedReducer, composeWithDevTools(middlewareEnchancer))
    : createStore(persistedReducer, middlewareEnchancer);
export type AppState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void | any, AppState, null, AnyAction>;

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`REACT_APP_ENV: ${process.env.REACT_APP_ENV}`);

export const persistor = persistStore(store);
