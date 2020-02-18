import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import userReducer from './User/Reducer'
import rootWatchers from './rootSagaWatchers';

const sagaMiddleware = createSagaMiddleware();

function configureStore(preloadedState = {}) {
  const store = createStore(
    combineReducers({
        userDetailState: userReducer,
    }),
    preloadedState,
    (applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootWatchers);
  return store;
}

export const store = configureStore();

