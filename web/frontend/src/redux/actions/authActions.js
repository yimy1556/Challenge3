import axios from 'axios'

var path = 'http://localhost:4000/api'

const authActions = {

    newUser: newUser => {
        return async(dispatch, getState) => {
            const response = await axios.post(path+`/user/register`, newUser)
            if(!response.data.success) {
                alert('Something went wrong')
            } else {
                dispatch({
                    type: 'LOG_USER',
                    payload: { firstName: response.data., lastName: response.data., email: response.data., token: response.data. }
                })
            }
        }
    },

    logUser: logUser => {
        return async(dispatch, getState) => {
            const response = await axios.post(path+`/user/login`, logUser)
            if(!response.data.success) {
                alert('Something went wrong')
            } else {
                dispatch({
                    type: 'LOG_USER',
                    payload: { firstName: response.data., lastName: response.data., email: response.data., token: response.data. }
                })
            }
        }
    },

    newUserGoogle: newUser => {
        return async (dispatch, getState) => {
            const response = await axios.post(path+`/user/register`, newUser)
            if(!response.data.success) {
                alert('Something went wrong')
            } else {
                dispatch({
                    type: 'LOG_USER',
                    payload: { firstName: response.data., lastName: response.data., email: response.data., token: response.data. }
                })
            }
        }
    },

    forcedLogIn: tokenLS => {
        return async (dispatch, getState) => {
            const response = await axios.get(path+`/user/login`, {
                headers: {
                    Authorization: `Bearer ${tokenLS}`
                }
            })
            dispatch({
                type: 'LOG_USER',
                payload: { firstName: response.data., lastName: response.data., email: response.data., token: tokenLS }
            })

        }
    },

    logOutUser: () => {
        return (dispatch, getState) => {
            dispatch({
                type: 'LOGOUT_USER'
            })
        }
    }

}

export default authActions