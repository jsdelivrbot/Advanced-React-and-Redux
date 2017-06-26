import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }, callback) {

    return function (dispatch) {
        // Submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                // If request is good:
                // - update state to indicate user is authenticate
                // - save the JWT token
                // - redirect to the route /feature
                callback();
            })
            .catch(() => {
                // If request is bad:
                // - show an error to the user

            });
     };
}