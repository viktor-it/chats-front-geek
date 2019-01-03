import {GET_CONTACTS, ADD_CONTACT} from "../constants";
import instance from '../axios-docs';

import ContactsAPI from '../reducers/contactsStub' 

export function getContacts() {
    return {
        type: GET_CONTACTS,
        payload: instance.get('/v1/account/contacts/')
    };
}

export function addContact(name) {
    return{
        type: ADD_CONTACT,
        //payload: instance.post('/v1/account/contacts/',{name})
        payload: ContactsAPI.addContact(name) //for testing
    };
}