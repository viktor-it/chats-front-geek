import {SET_ACTIVE_CHAT, GET_MESSAGES, ADD_MESSAGE} from "../constants";
import instance from '../axios-docs';

import MessagesAPI from '../reducers/messagesStub'

export function setActiveChat(id) {
    return {
        type: SET_ACTIVE_CHAT,
        payload: id
    }
}

export function getMessages(id) {
    let passedId = 1; 
    if(id !== undefined){
        passedId = id;
    }
    return {
        type: GET_MESSAGES,
        payload: MessagesAPI.getMessages(passedId) //for testing
    };
}

export function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        payload: message
    }
}
