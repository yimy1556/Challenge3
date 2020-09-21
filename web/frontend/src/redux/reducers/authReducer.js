const initialState = {
    firstName: '',
    lastName: '',
    mail: '',
    token: '',
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
                token: action.payload.token
            }
        case 'LOGOUT_USER':
            localStorage.clear()
            return {
                ...state,
                ...initialState
            }
        default:
            return state;
    }
}

export default authReducer