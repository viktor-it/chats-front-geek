import * as ConstantChats from '../constants/chatsConstants';


export function chatsReducer(state = {chats: [], is_loading: false}, action) {
    switch (action.type) {
        case ConstantChats.GET_CHATS_PENDING: {
            state = {...state, is_loading: true};
        break;
        }

        case ConstantChats.GET_CHATS_FULFILLED: {
            state = {...state, is_loading: false, chats: action.payload.data};
        break;
        }

        case ConstantChats.GET_CHATS_REJECTED: {
            state = {...state, is_loading: false, error_message: action.payload.message};
        break;
        }
    }
    return state;
}