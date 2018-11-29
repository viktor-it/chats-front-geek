import {createStore, combineReducers, applyMiddleware} from 'redux';

//Middleware
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import {chatsReducer} from './reducers/chatsReducer';
import {contactsReducer} from './reducers/contactsReducer';
import {authReducer} from './reducers/authReducer';


//Reducers
const reducers = combineReducers({
    chats: chatsReducer,
    contacts: contactsReducer,
    auth: authReducer
});

const middleware = applyMiddleware(promise(), logger, thunk);

const store = createStore(reducers, middleware);
export default store;