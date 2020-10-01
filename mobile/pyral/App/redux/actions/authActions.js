import axios from 'axios'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'


var path = 'http://localhost:4000/api'

const authActions = {

    newUser: newUser => {
        return async (dispatch, getState) => {
            const response = await axios.post(path + `/user/register`, newUser)
            if (!response.data.success) {
                alert('Something went wrong')
            } else {
                dispatch({
                    type: 'LOG_USER',
                    payload: { firstName: response.data.firstName, lastName: response.data.lastName, mail: response.data.mail, token: response.data.token }
                })
            }
        }
    },

    logUser: logUser => {
        return async (dispatch, getState) => {
            const response = await axios.post(path + `/user/login`, logUser)
            if (!response.data.success) {
                toast('Something went wrong')
            } else {
                toast('Welcome')
                dispatch({
                    type: 'LOG_USER',
                    payload: { firstName: response.data.firstName, lastName: response.data.lastName, mail: response.data.mail, token: response.data.token, rol: response.data.rol, rating: response.data.rating, success: response.data.success }
                })
            }
        }
    },

    newUserGoogle: newUser => {
        return async (dispatch, getState) => {
            const response = await axios.post(path + `/user/register`, newUser)
            if (!response.data.success) {
                alert('Something went wrong')
            } else {
                dispatch({
                    type: 'LOG_USER',
                    payload: { firstName: response.data.firstName, lastName: response.data.lastName, mail: response.data.mail, token: response.data.token, rol: response.data.rol, rating: response.data.rating, success: response.data.success }
                })
            }
        }
    },

    forcedLogIn: tokenLS => {
        return async (dispatch, getState) => {
            const response = await axios.get(path + `/user/login`, {
                headers: {
                    Authorization: `Bearer ${tokenLS}`
                }
            })
            dispatch({
                type: 'LOG_USER',
                payload: { firstName: response.data.firstName, lastName: response.data.lastName, mail: response.data.mail, token: tokenLS, rol: response.data.rol, rating: response.data.rating }
            })


        }
    },
    forcedRol: () => {
        return async (dispatch, getState) => {
            const rol = getState().authReducer.rol
            if (rol === '') {

            }
        }
    },
    logOutUser: () => {
        return (dispatch, getState) => {
            dispatch({
                type: 'LOGOUT_USER'
            })
        }
    },

    sendMail: (mail) => {

        return async (dispatch, getState) => {
            const response = await axios.put(path + '/sendMail', { mail })

            dispatch({
                type: "SEND_MAIL"
            })
            return response.data.success
        }
    },

    addNewsletter: mail => {
        return async (dispatch, getState) => {
            const response = await axios.post(path + '/newsletter', { mail })
            
            dispatch({
                    type: 'ADD_NEWSLETTER',
                })
                
                var errorResponse = ''
                if(response.data.error === undefined){
                    return  errorResponse = response.data
                }else {
                    return errorResponse = response.data.info
                }
                return errorResponse
                  
                
        }
    },
    rating: (productId, rating, token) => {
       
        return async (dispatch, getState) => {
            const response = await axios.post(path + `/user/rating`, { productId, rating }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
           
            if (!response.data.success) {
                toast('Something went wrong')
            } else {
                dispatch({
                    type: 'RATING',
                    payload: { rating: response.data.rating, productId: response.data.productId }
                })
            }
        }
    },
    ratingUpdate: (productId, rating, token) => {
        
        return async (dispatch, getState) => {
            const response = await axios.post(path + `/user/ratingUpdate`, { productId, rating }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
           
            if (!response.data.success) {
                toast('Something went wrong')
            } else {
                dispatch({
                    type: 'RATING',
                    payload: { rating: response.data.rating, productId: response.data.productId }
                })
            }
        }
    },

    changePassword: (mail, password) => {
        return async (dispatch, getState) => {
            const response = await axios.put(path + '/changePassword', { mail, password })
            dispatch({
                type: 'CHANGE_PASSWORD'
            })
            return response.data
        }
    }

}

export default authActions