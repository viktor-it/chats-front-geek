import {GET_USERS} from "../constants";
import instance from '../axios-docs';

import ContactsAPI from '../reducers/contactsStub'

export function getUsers(name) {

    return {
        type: GET_USERS,
        findUsers: ContactsAPI.findUsers(name), //for testing
        payload: instance.get('/v1/users/',{name})
    };   
}