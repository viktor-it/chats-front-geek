import {LOGIN, REGISTER, LOGOUT} from "../constants";
import instance from '../axios-docs';

export function loginUser(account_name,password) {
    return {
        type: LOGIN,
        payload: instance.put("/v1/auth/",{account_name,password})
    };
}

export function registerUser(account_name,password,email) {
    return {
        type: REGISTER,
        payload: instance.post("/v1/users/",{account_name,email,password})
    };
}

export function logoutUser(token) {
    return {
        type: LOGOUT,
        payload: instance.put("/v1/auth/",{token})
    };
}
