import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    CLEAR_LOGIN_ERROR
} from '../actions/actionType';

const initialState = {
    error: ""
};

const login = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, error: "" };
        case LOGIN_FAILED:
            return { ...state, error: action.payload };
        case CLEAR_LOGIN_ERROR:
            return { ...state, error: "" };
        default:
            return state;
    }
};

export default login;
