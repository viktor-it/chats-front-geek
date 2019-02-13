import {GET_CONTACTS, ADD_CONTACT, GET_ID_CONTACTS, EDIT_CONTACT, DELETE_CONTACT} from "../constants";
import instance from '../axios-docs';

import ContactsAPI from '../reducers/contactsStub' 

export function getContacts() {
    return {
        type: GET_CONTACTS,
        //payload: instance.get('/v1/account/contacts/')
        payload: ContactsAPI.all() 
    };
}

export function addContact(name) {
    return{
        type: ADD_CONTACT,
        //payload: instance.post('/v1/account/contacts/',{name})
        payload: ContactsAPI.addContact(name) //for testing
    };
}

export function getContactsById(id){
    return {
        type: GET_ID_CONTACTS,
        // payload: instance.get(`/account/contacts/${id}`)
        payload: ContactsAPI.get(id)
    };
}

export function editContacts(id, name, text){
    return {
        type: EDIT_CONTACT,
        payload: instance.patch("/account/contacts",{id, name, text}) 
    };
}

export function deleteContacts(id){
    return {
        type: DELETE_CONTACT,
        payload: instance.delete(`/account/contacts/${id}`)
    };
}