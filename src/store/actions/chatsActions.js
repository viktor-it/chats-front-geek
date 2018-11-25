
import {GET_CHATS} from "../constants/chatsConstants";
import axios from 'axios';

export function getChats() {
    return {
        type: GET_CHATS,
        payload: axios.get('#')
    };
}
