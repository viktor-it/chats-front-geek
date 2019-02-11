import {GET_ACCOUNT} from "../constants";
import instance from '../axios-docs';


export function getAccount() {
    return {
        type: GET_ACCOUNT,
        payload: instance.get('/account/')
    };
}