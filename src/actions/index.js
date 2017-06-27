import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';


const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }, callback) {

    return function (dispatch) {
        // Submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                // If request is good:
                // - update state to indicate user is authenticate
                dispatch({ type: AUTH_USER });

                // - save the JWT token
                localStorage.setItem('token', response.data.token);

                // - redirect to the route /feature
                callback();
            })
            .catch(() => {
                // If request is bad:
                // - show an error to the user
                dispatch(authError('Bad login info'));
            });
     };
}

export function authError(error) {

    return {
        type: AUTH_ERROR,
        payload: error
    };
}