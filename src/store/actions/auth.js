import * as actionTypes from './actionTypes';
import axios from 'axios'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
        
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    return {
       type: actionTypes.AUTH_LOGOUT 
    }
}

export const checkAuthTimeout = (expTime) => {
    return dispatch => {
        setTimeout(()=> {
            dispatch(logout())
        }, expTime * 1000)
    }
}

export const auth = ( email, password, isRegistration) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            
            email: email,
            password: password,
            returnSecureToken: true
        }
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBU82ipPwdtwo0997NxyB8K9xPgM655N1c'
        if (!isRegistration){
            authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBU82ipPwdtwo0997NxyB8K9xPgM655N1c'
        }
        axios.post(authUrl, authData)
        .then(response => {
            console.log(response.data.idToken);
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn))
        })
        .catch(err => {
            console.log(err);
            dispatch(authFail());
        })
    
    };
};