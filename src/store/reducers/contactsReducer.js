import * as Constants from '../constants';

const initialState = {
    // token: localStorage.getItem("token"),
    is_loading_contacts: false
}

export function contactsReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.GET_CONTACTS_PENDING: {
            state = {...state, is_loading_contacts: true};
        break;
        }

        case Constants.GET_CONTACTS_FULFILLED: {
            state = {
                ...state,
                is_loading_contacts: false,
                contacts: action.payload.data};
        break;
        }

        case Constants.GET_CONTACTS_REJECTED: {
            let contacts = [
                {
                "id": 1,
                "img": 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                "name": "Петя Петров",
                "text": "Текст крайнего сообщения",
                "unread": 2,
                "time": "10.10.2018",
                "mark": "undelivered/unread"
                }, 
                {
                "id": 2,
                "img": 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
                "name": "Сима Симаков",
                "text": "Текст крайнего сообщения",
                "unread": "",
                "time": "10.10.2018",
                "mark": "delivered/read"
                }
            ];
            state = {contacts, is_loading_contacts: false, error_message: action.payload.message};
        break;
        }
        
        default: {state = {...state}}
    }
    return state;
}