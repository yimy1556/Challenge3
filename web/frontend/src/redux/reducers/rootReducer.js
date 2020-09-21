import authReducer from './authReducer'
const { combineReducers } = require('redux')

const rootReducer = combineReducers ({
    authReducer: authReducer
})

export default rootReducer