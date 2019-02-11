import * as Constants from '../constants';

const initialState = {
    account: [],
    is_loading_account: false
}

export function accountReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.GET_ACCOUNT_PENDING: {
            state = {...state, is_loading_account: true};
        break;
        }

        case Constants.GET_ACCOUNT_FULFILLED: {
            state = {
                ...state,
                is_loading_account: false,
                account: {
                    email: action.payload.data.email,
                    name: action.payload.data.profile.username
                }
            };
        break;
        }

        case Constants.GET_ACCOUNT_REJECTED: {
            state = {
                ...state,
                is_loading_account: false,
                error_message: action.payload.message};
        break;
        }
        
        default: {state = {...state}}
    }
    return state;
}