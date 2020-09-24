const initialState = {
    firstName: '',
    lastName: '',
    mail: '',
    token: '',
    rol: '',
    success: ''
}

const authReducer = (state = initialState, action) => {
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
                success: action.payload.success
            }
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
