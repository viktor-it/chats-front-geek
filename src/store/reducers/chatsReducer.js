import * as ConstantChats from '../constants';


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
            let chats = [
                {
                "id": 1,
                "img": 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                "title": "Группа 1",
                "text": "Текст крайнего сообщения",
                "unread": 2,
                "time": "10.10.2018",
                "mark": "undelivered/unread"
                }, 
                {
                "id": 2,
                "img": 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                "title": "Группа 2",
                "text": "Текст крайнего сообщения",
                "unread": "",
                "time": "10.10.2018",
                "mark": "delivered/read"
                }
            ];
            state = {chats, is_loading: false, error_message: action.payload.message};
        break;
        }
    }
    return state;
}