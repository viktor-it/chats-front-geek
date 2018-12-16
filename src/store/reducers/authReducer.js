import * as Constants from '../constants';

const initialState = {
    token: localStorage.getItem("token"),
    is_loading_user: false
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.LOGIN_PENDING: {
            state = {
                ...state,
                is_loading_user: true
            };
            break;
        }        
        case Constants.LOGIN_FULFILLED: {
            if (action.payload.data.UID) {
                localStorage.setItem("token",action.payload.data.token);
                state = {
                    ...state,
                    token: action.payload.data.UID,
                    is_loading_user: false
                };
            } else {
                    state = {
                        ...state,
                        is_loading_user: false
                    };
                }
            break;
        }        
        case Constants.LOGIN_REJECTED: {
            localStorage.setItem("token",'test user');
            state = {
                ...state,
                token: 'test user', //delete in production
                is_loading_user: false
            };
            break;
        }
        case Constants.REGISTER_USER_PENDING: {
            state = {
                ...state,
                is_loading_user: true
            };
            break;
        }        
        case Constants.REGISTER_USER_FULFILLED: {
            if (action.payload.data.UID) {
                localStorage.setItem("token",action.payload.data.token);
                state = {
                    ...state,
                    token: action.payload.data.UID,
                    is_loading_user: false
                };
            } else {
                    state = {
                        ...state,
                        is_loading_user: false
                    };
                }
            break;
        }        
        case Constants.REGISTER_USER_REJECTED: {
            state = {
                ...state,
                is_loading_user: false
            };
            break;
        }
        case Constants.LOGOUT: {
            localStorage.removeItem('token');
            state = {
                ...state,
                token: null
            };
            break;
        }
        case Constants.LOGOUT_FULFILLED: {
            localStorage.removeItem('token');
            state = {
                ...state,
                token: null
            };
            break;
        }
        default: {state = {...state}}
    }
    return state;
}