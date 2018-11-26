import {GET_CONTACTS} from "../constants/contactsConstants";
import axios from 'axios';

export function getContacts() {
    return {
        type: GET_CONTACTS,
        payload: axios.get('#')
    };
}