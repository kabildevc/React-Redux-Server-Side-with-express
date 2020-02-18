import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {store} from './createStore'

// *************** Store configuration *********
// import createSagaMiddleware from 'redux-saga';
// import userReducer from './User/Reducer'
// import rootWatchers from './rootSagaWatchers';
// import {createStore, applyMiddleware, combineReducers} from 'redux';



// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//     combineReducers({
//         userDetailState: userReducer,
//     }),
//     {},
//     applyMiddleware(sagaMiddleware)
// );
// sagaMiddleware.run(rootWatchers);

// *************** Store configuration *********

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
