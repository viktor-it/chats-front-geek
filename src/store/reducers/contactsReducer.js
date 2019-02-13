import * as Constants from '../constants';
import merge from 'lodash/merge';
import ContactsAPI from './contactsStub'

let contacts = ContactsAPI.all();

const initialState = {
    contacts: [],
    activeContact: null,
    is_loading_contacts: false
}

export function contactsReducer(state = initialState, action) {
    switch (action.type) {
        //Получение списка контактов
        case Constants.GET_CONTACTS_PENDING: {
            state = {...state, is_loading_contacts: true};
        break;
        }
        case Constants.GET_CONTACTS_FULFILLED: {
            state = {
                //...state, 
                contacts, //for testing
                is_loading_contacts: false,
                //contacts: action.payload.data //commented for testing
            };
        break;
        }
        case Constants.GET_CONTACTS_REJECTED: {
            state = {
                //...state, 
                contacts, //for testing 
                is_loading_contacts: false,
                error_message: action.payload.message};
        break;
        }

        //Добавление контакта
        case Constants.ADD_CONTACT_PENDING: {
            state = {
                ...state,
                is_loading_contact: true
            };
            break;
        }        
        case Constants.ADD_CONTACT_FULFILLED: {
            state = {
                ...state,
                is_loading: false
            };
            break;
        }        
        case Constants.ADD_CONTACT_REJECTED: {
            state = {
                ...state,
                is_loading_contacts: false,
                error_message: action.payload.message
            };
            break;
        }

        //Получение контактов по ID       
        case Constants.GET_ID_CONTACTS: {
            let index = null;
            state.contacts.forEach((value, i) => {
                if (parseInt(value.id) === parseInt(action.payload)) {
                    index = i;
                }
            });
            if(index !== null){
                state = merge({}, state);
                state.contact = {...state.contacts[index]};
            }
            break;
        }

        //Редактирование контакта
        case Constants.EDIT_CONTACT: {
            let index = null;
                state.contacts.forEach((value, i) => {
                    if (parseInt(value.id) === parseInt(action.payload.id)) {
                        index = i;
                    }
                });
                if(index !== null){
                    state = merge({}, state);
                    state.contacts[index] = {
                        ...state.contacts[index], 
                        name: action.payload.name, 
                        text: action.payload.text
                    }
                }
                break;
        }

        //Удаление контакта
        case Constants.DELETE_CONTACT: {
            let index = null;
            state.contacts.forEach((value, i) => {
               if(parseInt(value.id) === parseInt(action.payload)){
                   index = i;
               }
            });

            if(index !== null){
                state = merge({}, state);
                state.contacts.splice(index, 1);
            }
            break;
        }
        
        default: {state = {...state}}
    }
    return state;
}