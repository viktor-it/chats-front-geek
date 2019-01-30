import * as ConstantChats from '../constants';

import ChatsAPI from './chatsStub'

let chats = ChatsAPI.all();

const initialState = {
    chats: [], 
    activeChat: null,
    is_loading: false
}

export function chatsReducer(state = initialState, action) {
    switch (action.type) {
        //получить список чатов------------------------------
        case ConstantChats.GET_CHATS_PENDING: {
            state = {
                ...state, 
                is_loading: true
            };
        break;
        }
        case ConstantChats.GET_CHATS_FULFILLED: {
            state = {
                ...state,
                chats: action.payload.data, 
                is_loading: false               
            };
        break;
        }
        case ConstantChats.GET_CHATS_REJECTED: {
            state = {
                chats,
                is_loading: false, 
                error_message: action.payload.message
            };
        break;
        }

        //создать группу------------------------------
        case ConstantChats.CREATE_GROUP_PENDING: {
            state = {
                ...state, 
                is_loading: true
            };
        break;
        }
        case ConstantChats.CREATE_GROUP_FULFILLED: {
            state = {
                ...state, 
                is_loading: false, 
                group: action.payload.data
            };
        break;
        }
        case ConstantChats.CREATE_GROUP_REJECTED: {
            state = {
                ...state,
                is_loading: false, 
                error_message: action.payload.message
            };
        break;
        }

        //профиль группы------------------------------
        case ConstantChats.GET_GROUP_PROFILE_PENDING: {
            state = {
                ...state, 
                is_loading: true
            };
        break;
        }
        case ConstantChats.GET_GROUP_PROFILE_FULFILLED: {
            state = {
                ...state, 
                is_loading: false, 
                group: action.payload.data
            };
        break;
        }
        case ConstantChats.GET_GROUP_PROFILE_REJECTED: {
            state = {
                ...state,
                is_loading: false, 
                error_message: action.payload.message
            };
        break;
        }

        default: {state = {...state}}
    }

    return state;
}