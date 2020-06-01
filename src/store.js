import { createStore, combineReducers } from 'redux';

import { reducer as todoReducer } from './todo';
import { reducer as filterReducer } from './filter';

// import Perf from 'react-addons-perf'

// const win = window;
// win.Perf = Perf

const reducer = combineReducers({
    todo: todoReducer,
    filter: filterReducer
});

const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-immutable-state-invariant')());
}



export default createStore(reducer, {});