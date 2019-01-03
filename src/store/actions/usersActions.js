import {GET_USERS} from "../constants";
import instance from '../axios-docs';

export function getUsers() {
    return {
        type: GET_USERS,
        payload: instance.get('/v1/users/')
    };
}