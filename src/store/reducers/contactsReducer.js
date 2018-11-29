import * as ConstantContacts from '../constants';


export function contactsReducer(state = {contacts: [], is_loading: false}, action) {
    switch (action.type) {
        case ConstantContacts.GET_CONTACTS_PENDING: {
            state = {...state, is_loading: true};
        break;
        }

        case ConstantContacts.GET_CONTACTS_FULFILLED: {
            state = {...state, is_loading: false, contacts: action.payload.data};
        break;
        }

        case ConstantContacts.GET_CONTACTS_REJECTED: {
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
            state = {contacts, is_loading: false, error_message: action.payload.message};
        break;
        }
    }
    return state;
}