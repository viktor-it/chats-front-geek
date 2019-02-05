import {GET_CONTACTS, ADD_CONTACT} from "../constants";
import instance from '../axios-docs';

//import ContactsAPI from '../reducers/contactsStub' 

export function getContacts() {
    return {
        type: GET_CONTACTS,
        payload: instance.get('/v1/account/contacts/')
    };
}

export function addContact(id) {
        console.log(id); 
    return {

        type: ADD_CONTACT,
        // payload: ContactsAPI.addContact(name) //for testing
        payload: instance.post('/account/contacts/',{id})
    };
}