import * as Constants from '../constants';

import ContactsAPI from './contactsStub'

let users = ContactsAPI.allUsers();

const initialState = {
    users: [],
    is_loading_users: false
}

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.GET_USERS_PENDING: {
            state = {...state, is_loading_users: true};
        break;
        }

        case Constants.GET_USERS_FULFILLED: {
            state = {
                //...state, //commented for testing
                users, //for testing
                is_loading_users: false,
                //users: action.payload.data //commented for testing
            };
        break;
        }

        case Constants.GET_USERS_REJECTED: {
            state = {
                users,
                is_loading_users: false,
                error_message: action.payload.message};
        break;
        }
        
        default: {state = {...state}}
    }
    return state;
}