
import {GET_CHATS} from "../constants";

import instance from '../axios-docs';


export function getChats() {
    return {
        type: GET_CHATS,
        payload: instance.get("/v1/chats/",{})
    };
}
