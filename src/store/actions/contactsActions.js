import {GET_CONTACTS, ADD_CONTACT, ADD_TO_BLACKLIST, GET_BLACKLIST} from "../constants";
import instance from '../axios-docs';

//import ContactsAPI from '../reducers/contactsStub' 

export function getContacts() {
    return {
        type: GET_CONTACTS,
        payload: instance.get('/v1/account/contacts/')
    };
}

export function addContact(id) {
    return {
        type: ADD_CONTACT,
        // payload: ContactsAPI.addContact(name) //for testing
        payload: instance.post('/account/contacts/',{id})
    };
}

export function addToBlackList(id) {
    return {
        type: ADD_TO_BLACKLIST,
        payload: instance.post('/account/blacklist/',{id})
    };
}

export function getBlackList() {
    return {
        type: GET_BLACKLIST,
        payload: instance.get('/account/blacklist/')
    };
}