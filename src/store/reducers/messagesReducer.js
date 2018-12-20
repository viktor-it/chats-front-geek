import * as Constants from '../constants';

const initialState = {
    messages: [],
    is_loading_messages: false
}

export function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.ADD_MESSAGE: {
            const mess = [...state.messages];
            mess.push(action.payload);
            state = {
                ...state,
                messages: mess
            };
            break;
        }        
        case Constants.GET_MESSAGES: {
            state = {
                ...state,
                messages: action.payload
            };
            break;
        }        
        case Constants.GET_MESSAGES_PENDING: {
            state = {
                ...state,
                is_loading_messages: true
            };
            break;
        }        
        case Constants.GET_MESSAGES_FULFILLED: {
            state = {
                ...state,
                messages: action.payload.data,
                is_loading_messages: false
            };
            break;
        }        
        default: {state = {...state}}
    }
    return state;
}