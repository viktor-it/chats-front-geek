import {createStore, combineReducers, applyMiddleware} from 'redux';

//Middleware
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import {messageReducer} from './reducers/messageReducer';
import {authReducer} from './reducers/authReducer';
//import {contactReducer} from './reducers/contactReducer';
// import {contactsReducer} from './reducers/contactsReducer';
// import {chatsReducer} from './reducers/chatsReducer';

//Reducers
const reducers = combineReducers({
    message: messageReducer,
    auth: authReducer,
    //contact: contactReducer,
    // contacts: contactsReducer,
    // chats: chatsReducer,
});

const middleware = applyMiddleware(promise(), logger, thunk);

const store = createStore(reducers, middleware);
export default store;