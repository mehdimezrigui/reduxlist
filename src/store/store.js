import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import  contactReduce from '../reducers/ContactReducers';
const middleware = [thunk];
export const store=createStore(contactReduce ,   compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))