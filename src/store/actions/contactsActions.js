import {GET_CONTACTS} from "../constants";
import instance from '../axios-docs';

export function getContacts() {
    return {
        type: GET_CONTACTS,
        payload: instance.get('/v1/account/contacts/')
    };
}