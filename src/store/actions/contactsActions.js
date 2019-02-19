import {GET_CONTACTS, ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT} from "../constants";
import instance from '../axios-docs';

export function getContacts() {
    return {
        type: GET_CONTACTS,
        payload: instance.get('/account/contacts/')
    };
}

export function addContact(name) {
    return{
        type: ADD_CONTACT,
        payload: instance.post('/account/contacts/',{name})
    };
}

export function editContacts(name){
    return {
        type: EDIT_CONTACT,
        payload: instance.put("/account/contacts",{name}) 
    };
}

export function deleteContacts(id){
    return {
        type: DELETE_CONTACT,
        payload: instance.delete(`/account/contacts/${id}`)
    };
}