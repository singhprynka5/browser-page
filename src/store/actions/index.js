import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED
} from './actionType';

export const userSiginIn = (userName, password) => {
    return async dispatch => {
        try {
            if (userName && password && userName === "priyanka" && password === "1234") {
                localStorage.setItem("@tokenId", Math.random().toString(36).substring(7));
                localStorage.setItem("@userName", "priyanka")
                dispatch(fetchStatus("priyanka", LOGIN_SUCCESS));
                window.location.href = "/"
            } else {
                throw new Error("Enter valid username & Password")
            }
        } catch (err) {
            dispatch(
                fetchStatus(
                    (err && err.message) ||
                    "Something went wrong. Please try again later.",
                    LOGIN_FAILED
                )
            )
        }
    }
};

export const logout = () => {
    return async dispatch => {
        try {
            localStorage.removeItem("@tokenId");
            localStorage.removeItem("@userName");
            dispatch(fetchStatus(true, LOGOUT_SUCCESS));
            window.location.href = "/login";
        } catch (err) {
            dispatch(
                fetchStatus(
                    "Something went wrong. Please try again later.",
                    LOGOUT_FAILED
                )
            )
        }
    }
};

export const fetchStatus = (res, type) => {
    return {
        type: type,
        payload: res
    };
};