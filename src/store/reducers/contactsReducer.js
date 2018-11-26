import * as ConstantContacts from '../constants/contactsConstants';


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
            state = {...state, is_loading: false, error_message: action.payload.message};
        break;
        }
    }
    return state;
}