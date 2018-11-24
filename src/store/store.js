import {createStore, combineReducers, applyMiddleware} from 'redux';

//Middleware
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import {messageReducer} from './reducers/messageReducer';
import {contactReducer} from './reducers/contactReducer';
import {authReducer} from './reducers/authReducer';

//Reducers

const reducers = combineReducers({
    message: messageReducer,
    contact: contactReducer,
    auth: authReducer
});

const middleware = applyMiddleware(promise(), logger, thunk);

const store = createStore(reducers, middleware);
export default store;