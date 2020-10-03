import axios from 'axios'
import { toast } from 'react-toastify';
import swal from 'sweetalert';


var path = 'http://localhost:4000/api'

const authActions = {

    newUser: newUser => {
        return async (dispatch, getState) => {
            const response = await axios.post(path + `/user/register`, newUser)
            console.log(response.data);
            if (!response.data.success) {
                toast.error('Incorrect mail or password')
            } else {
                swal({
                    title: 'Pyral',
                    text: 'Welcome',
                    closeOnClickOutside: false,
                    buttons: false,
                    timer: 1500,
                })
                setTimeout(() => {
                    dispatch({
                        type: 'LOG_USER',
                        payload: {
                            firstName: response.data.firstName,
                            lastName: response.data.lastName,
                            mail: response.data.mail,
                            token: response.data.token,
                            contact: response.data.contact,
                        }
                    })
                }, 1500)
            }
        }
    },

    logUser: logUser => {
        return async (dispatch, getState) => {
            const response = await axios.post(path + `/user/login`, logUser)
            if (!response.data.success) {
                toast.error('Incorrect mail or password')
            } else {
                swal({
                    title: 'Pyral',
                    text: 'Welcome back',
                    closeOnClickOutside: false,
                    buttons: false,
                    timer: 1500,
                })
                setTimeout(() => {
                    dispatch({
                        type: 'LOG_USER',
                        payload: {
                            firstName: response.data.firstName,
                            lastName: response.data.lastName,
                            mail: response.data.mail,
                            token: response.data.token,
                            contact: response.data.contact,
                            rol: response.data.rol,
                            rating: response.data.rating,
                            success: response.data.success
                        }
                    })
                }, 1500)
            }
        }
    },

    newUserGoogle: newUser => {
        return async (dispatch, getState) => {
            const response = await axios.post(path + `/user/register`, newUser)
            if (!response.data.success) {
                alert('Something went wrong')
            } else {
                swal({
                    title: 'Pyral',
                    text: 'Welcome!',
                    closeOnClickOutside: false,
                    buttons: false,
                    timer: 1500,
                })
                setTimeout(() => {
                    dispatch({
                        type: 'LOG_USER',
                        payload: {
                            firstName: response.data.firstName,
                            lastName: response.data.lastName,
                            mail: response.data.mail,
                            token: response.data.token,
                            contact: response.data.contact,
                            rol: response.data.rol,
                            rating: response.data.rating,
                            success: response.data.success
                        }
                    })
                }, 1500)
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
            console.log(response.data.token)
            dispatch({
                type: 'LOG_USER',
                payload: {
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    mail: response.data.mail,
                    token: response.data.token,
                    contact: response.data.contact,
                    rol: response.data.rol,
                    rating: response.data.rating,
                }
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
            if (response.data.error === undefined) {
                return errorResponse = response.data
            } else {
                return errorResponse = response.data.info
            }
            return errorResponse
        }
    },

    lowNewsletter: mail => {
        return async (dispatch, getState) => {
            const response = await axios.put(path + '/newsletter', { mail })
            dispatch({
                type: 'LOW_NEWSLETTER'
            })
            return response
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

    postContact: (country, city, address, postalCode, phoneNumber, token) => {
        console.log(country, city, address, postalCode, phoneNumber);
        return async (dispatch, getState) => {
            const response = await axios.post(path + `/user/direction`, { country, city, address, postalCode, phoneNumber }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (!response.data.success) {
                toast('Something went wrong')
            }

        }
    },

    // getContact: token => {
    //     return async (dispatch, getState) => {
    //         const response = await axios.get(path+`/user/direction`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         })
    //         if (!response.data.success) {
    //             toast('Something went wrong')
    //         } else {
    //             dispatch({
    //                 type: 'GET_CONTACT',
    //                 payload:{contact: response.data.contact}
    //             })
    //         }
    //     }
    // },

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