import {createStore, combineReducers, applyMiddleware} from 'redux';

//Middleware
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

//Reducers
import {chatsReducer} from './reducers/chatsReducer';
import {contactsReducer} from './reducers/contactsReducer';

const reducers = combineReducers({
    chats: chatsReducer,
    contacts: contactsReducer
});

const middleware = applyMiddleware(promise(), logger, thunk);

const store = createStore(reducers, middleware);
export default store;