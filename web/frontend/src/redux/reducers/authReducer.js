const initialState = {
    firstName: '',
    lastName: '',
    mail: '',
    token: '',
    rol: '',
    contact: [],
    success: '',
    rating: '',
    productId: ''
}

const authReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'LOG_USER':
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                mail: action.payload.mail,
                token: action.payload.token,
                rol: action.payload.rol,
                contact: action.payload.contact,
                success: action.payload.success,
                rating: action.payload.rating,
            }
        case 'RATING':
            return {
                ...state,
                productId: action.payload.productId
            }
        // case 'GET_CONTACT':
        //     return {
        //         ...state,
        //         contact: action.payload.contact
        //     }
        case 'LOGOUT_USER':
            localStorage.clear()
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
}

export default authReducer
